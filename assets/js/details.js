/* ============================================
   ENSTA Website - Details Pages JavaScript
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

// Get page type from URL
const currentPage = window.location.pathname.split('/').pop();
const isSpecialite = currentPage === 'specialite.html';
const isDepartement = currentPage === 'departement.html';

// Load Specialité Data
function loadSpecialite() {
    const id = getUrlParameter('id');
    
    if (!id || !specialitesData[id]) {
        showError('Spécialité non trouvée');
        return;
    }
    
    const data = specialitesData[id];
    
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
        detailsSubtitle.textContent = data.description;
    }
    
    const detailsBadge = document.getElementById('detailsBadge');
    if (detailsBadge) {
        detailsBadge.textContent = `Domaine ${data.domain}`;
        if (data.isNew) {
            detailsBadge.style.background = 'rgba(16, 185, 129, 0.3)';
            detailsBadge.innerHTML = `Domaine ${data.domain} <span style="background: #10b981; padding: 0.2rem 0.5rem; border-radius: 10px; margin-left: 0.5rem; font-size: 0.75rem;">NOUVEAU 2025-2026</span>`;
        }
    }
    
    // Update description
    const fullDescription = document.getElementById('fullDescription');
    if (fullDescription) {
        fullDescription.innerHTML = `<p>${data.fullDescription}</p>`;
    }
    
    // Update objectives
    const objectivesList = document.getElementById('objectivesList');
    if (objectivesList && data.objectives) {
        objectivesList.innerHTML = data.objectives.map(obj => `<li>${obj}</li>`).join('');
    }
    
    // Update careers
    const careersGrid = document.getElementById('careersGrid');
    if (careersGrid && data.careers) {
        careersGrid.innerHTML = data.careers.map(career => `
            <div class="career-card">
                <i class="fas fa-user-tie"></i>
                <span>${career}</span>
            </div>
        `).join('');
    }
    
    // Update sidebar info
    const infoDuration = document.getElementById('infoDuration');
    if (infoDuration) {
        infoDuration.textContent = data.duration || '3 ans';
    }
    
    const infoCycle = document.getElementById('infoCycle');
    if (infoCycle) {
        infoCycle.textContent = data.cycle || 'Second Cycle';
    }
    
    const infoDomain = document.getElementById('infoDomain');
    if (infoDomain) {
        infoDomain.textContent = data.domain;
    }
}

// Load Département Data
function loadDepartement() {
    const id = getUrlParameter('id');
    
    if (!id || !departementsData[id]) {
        showError('Département non trouvé');
        return;
    }
    
    const data = departementsData[id];
    
    // Update page title
    document.title = `${data.fullTitle} - ENSTA`;
    
    // Update breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = data.fullTitle;
    }
    
    // Update header
    const detailsIcon = document.getElementById('detailsIcon');
    if (detailsIcon) {
        detailsIcon.innerHTML = `<i class="${data.icon}"></i>`;
    }
    
    const detailsTitle = document.getElementById('detailsTitle');
    if (detailsTitle) {
        detailsTitle.textContent = data.fullTitle;
    }
    
    const detailsSubtitle = document.getElementById('detailsSubtitle');
    if (detailsSubtitle) {
        detailsSubtitle.textContent = data.description;
    }
    
    // Update description
    const fullDescription = document.getElementById('fullDescription');
    if (fullDescription) {
        fullDescription.innerHTML = `<p>${data.fullDescription}</p>`;
    }
    
    // Update missions
    const missionsList = document.getElementById('missionsList');
    if (missionsList && data.missions) {
        missionsList.innerHTML = data.missions.map(mission => `<li>${mission}</li>`).join('');
    }
    
    // Update teachings
    const teachingsGrid = document.getElementById('teachingsGrid');
    if (teachingsGrid && data.enseignements) {
        teachingsGrid.innerHTML = data.enseignements.map(teaching => `
            <div class="teaching-card">
                <i class="fas fa-check-circle"></i>
                <span>${teaching}</span>
            </div>
        `).join('');
    }
    
    // Update sidebar info
    const infoTitle = document.getElementById('infoTitle');
    if (infoTitle) {
        infoTitle.textContent = data.title;
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
    if (isSpecialite) {
        loadSpecialite();
    } else if (isDepartement) {
        loadDepartement();
    }
});

