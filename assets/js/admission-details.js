/* ============================================
   ENSTA Website - Admission Details JavaScript
   ============================================ */

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Load Admission Data
function loadAdmission() {
    const id = getUrlParameter('id');
    
    if (!id || !admissionData[id]) {
        showError('Modalité d\'admission non trouvée');
        return;
    }
    
    const data = admissionData[id];
    
    // Update page title
    document.title = `${data.title} - ENSTA`;
    
    // Update breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = data.title;
    }
    
    // Update header
    const detailsIcon = document.getElementById('detailsIcon');
    if (detailsIcon) {
        detailsIcon.innerHTML = `<i class="${data.icon}"></i>`;
    }
    
    const detailsTitle = document.getElementById('detailsTitle');
    if (detailsTitle) {
        detailsTitle.textContent = data.title;
    }
    
    const detailsSubtitle = document.getElementById('detailsSubtitle');
    if (detailsSubtitle) {
        detailsSubtitle.textContent = data.subtitle;
    }
    
    // Update description
    const fullDescription = document.getElementById('fullDescription');
    if (fullDescription) {
        fullDescription.innerHTML = `<p>${data.fullDescription}</p>`;
    }
    
    // Update conditions/objectifs
    const conditionsList = document.getElementById('conditionsList');
    const conditionsTitle = document.getElementById('conditionsTitle');
    
    if (data.conditions) {
        if (conditionsTitle) {
            conditionsTitle.innerHTML = '<i class="fas fa-check-circle"></i> Conditions d\'Admission';
        }
        if (conditionsList) {
            conditionsList.innerHTML = data.conditions.map(condition => `<li>${condition}</li>`).join('');
        }
    } else if (data.objectifs) {
        if (conditionsTitle) {
            conditionsTitle.innerHTML = '<i class="fas fa-bullseye"></i> Objectifs';
        }
        if (conditionsList) {
            conditionsList.innerHTML = data.objectifs.map(objectif => `<li>${objectif}</li>`).join('');
        }
    }
    
    // Update processus
    const processusContent = document.getElementById('processusContent');
    const processusTitle = document.getElementById('processusTitle');
    
    if (data.processus) {
        if (processusTitle) {
            processusTitle.innerHTML = '<i class="fas fa-list-ol"></i> Processus d\'Admission';
        }
        if (processusContent) {
            processusContent.innerHTML = `
                <div class="processus-timeline">
                    ${data.processus.map((step, index) => `
                        <div class="processus-step" data-aos="fade-up" data-aos-delay="${index * 100}">
                            <div class="processus-number">${step.step}</div>
                            <div class="processus-content">
                                <h4>${step.title}</h4>
                                <p>${step.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    } else if (data.programmes) {
        if (processusTitle) {
            processusTitle.innerHTML = '<i class="fas fa-book"></i> Programmes Disponibles';
        }
        if (processusContent) {
            processusContent.innerHTML = `
                <div class="programmes-grid">
                    ${data.programmes.map((programme, index) => `
                        <div class="programme-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                            <h4>${programme.type}</h4>
                            <p>${programme.description}</p>
                            <div class="programme-info">
                                <span><i class="fas fa-clock"></i> ${programme.duree}</span>
                                <span><i class="fas fa-laptop"></i> ${programme.modalite}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }
    
    // Update additional section
    const additionalSection = document.getElementById('additionalSection');
    const additionalTitle = document.getElementById('additionalTitle');
    const additionalContent = document.getElementById('additionalContent');
    
    if (data.epreuves) {
        if (additionalTitle) {
            additionalTitle.innerHTML = '<i class="fas fa-pencil-alt"></i> Épreuves du Concours';
        }
        if (additionalContent) {
            additionalContent.innerHTML = `
                <div class="epreuves-grid">
                    ${data.epreuves.map((epreuve, index) => `
                        <div class="epreuve-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                            <div class="epreuve-header">
                                <h4>${epreuve.matiere}</h4>
                                <span class="epreuve-coef">Coeff. ${epreuve.coefficient}</span>
                            </div>
                            <p class="epreuve-duree"><i class="fas fa-clock"></i> ${epreuve.duree}</p>
                            <p class="epreuve-desc">${epreuve.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    } else if (data.documents) {
        if (additionalTitle) {
            additionalTitle.innerHTML = '<i class="fas fa-folder-open"></i> Documents Requis';
        }
        if (additionalContent) {
            additionalContent.innerHTML = `
                <ul class="documents-list">
                    ${data.documents.map(doc => `<li><i class="fas fa-file-alt"></i> ${doc}</li>`).join('')}
                </ul>
            `;
        }
    } else if (data.domaines) {
        if (additionalTitle) {
            additionalTitle.innerHTML = '<i class="fas fa-tags"></i> Domaines de Formation';
        }
        if (additionalContent) {
            additionalContent.innerHTML = `
                <div class="domaines-grid">
                    ${data.domaines.map((domaine, index) => `
                        <div class="domaine-tag" data-aos="fade-up" data-aos-delay="${index * 50}">
                            <i class="fas fa-check"></i> ${domaine}
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }
    
    // Update dates if exists
    if (data.dates) {
        const datesSection = document.createElement('section');
        datesSection.className = 'details-section';
        datesSection.setAttribute('data-aos', 'fade-up');
        datesSection.setAttribute('data-aos-delay', '400');
        datesSection.innerHTML = `
            <h2 class="section-title-small">
                <i class="fas fa-calendar-alt"></i>
                Calendrier
            </h2>
            <ul class="dates-list">
                ${data.dates.map(date => `<li><i class="fas fa-calendar-check"></i> ${date}</li>`).join('')}
            </ul>
        `;
        const detailsMain = document.querySelector('.details-main');
        if (detailsMain) {
            detailsMain.appendChild(datesSection);
        }
    }
    
    // Update niveaux if exists
    if (data.niveaux) {
        const niveauxSection = document.createElement('section');
        niveauxSection.className = 'details-section';
        niveauxSection.setAttribute('data-aos', 'fade-up');
        niveauxSection.setAttribute('data-aos-delay', '500');
        niveauxSection.innerHTML = `
            <h2 class="section-title-small">
                <i class="fas fa-layer-group"></i>
                Niveaux d'Intégration
            </h2>
            <div class="niveaux-grid">
                ${data.niveaux.map((niveau, index) => `
                    <div class="niveau-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <h4>${niveau.niveau}</h4>
                        <p>${niveau.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        const detailsMain = document.querySelector('.details-main');
        if (detailsMain) {
            detailsMain.appendChild(niveauxSection);
        }
    }
    
    // Update avantages if exists
    if (data.avantages) {
        const avantagesSection = document.createElement('section');
        avantagesSection.className = 'details-section';
        avantagesSection.setAttribute('data-aos', 'fade-up');
        avantagesSection.setAttribute('data-aos-delay', '600');
        avantagesSection.innerHTML = `
            <h2 class="section-title-small">
                <i class="fas fa-star"></i>
                Avantages
            </h2>
            <div class="avantages-grid">
                ${data.avantages.map((avantage, index) => `
                    <div class="avantage-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <i class="fas fa-check-circle"></i>
                        <span>${avantage}</span>
                    </div>
                `).join('')}
            </div>
        `;
        const detailsMain = document.querySelector('.details-main');
        if (detailsMain) {
            detailsMain.appendChild(avantagesSection);
        }
    }
    
    // Update modalites if exists
    if (data.modalites) {
        const modalitesSection = document.createElement('section');
        modalitesSection.className = 'details-section';
        modalitesSection.setAttribute('data-aos', 'fade-up');
        modalitesSection.setAttribute('data-aos-delay', '700');
        modalitesSection.innerHTML = `
            <h2 class="section-title-small">
                <i class="fas fa-cog"></i>
                Modalités d'Inscription
            </h2>
            <div class="modalites-grid">
                ${data.modalites.map((modalite, index) => `
                    <div class="modalite-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <h4>${modalite.titre}</h4>
                        <p>${modalite.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        const detailsMain = document.querySelector('.details-main');
        if (detailsMain) {
            detailsMain.appendChild(modalitesSection);
        }
    }
    
    // Update sidebar
    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.getElementById('contactPhone');
    const contactHoraires = document.getElementById('contactHoraires');
    
    if (data.contact) {
        if (contactEmail) {
            contactEmail.textContent = data.contact.email;
        }
        if (contactPhone) {
            contactPhone.textContent = data.contact.phone;
        }
        if (contactHoraires) {
            contactHoraires.textContent = data.contact.horaires;
        }
    }
}

// Show Error
function showError(message) {
    const main = document.querySelector('.details-page .container');
    if (main) {
        main.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--accent); margin-bottom: 1.5rem;"></i>
                <h2 style="color: var(--secondary); margin-bottom: 1rem;">${message}</h2>
                <p style="color: var(--text-light); margin-bottom: 2rem;">La page demandée n'existe pas ou a été déplacée.</p>
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-home"></i>
                    Retour à l'accueil
                </a>
            </div>
        `;
    }
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    loadAdmission();
});

