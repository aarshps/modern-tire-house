// SPA navigation controller for Modern Tire House SPC
// Handles single-page application routing and section switching

document.addEventListener('DOMContentLoaded', function () {
    function showSection(sectionId) {
        document.querySelectorAll('.spa-section').forEach(sec => {
            sec.style.display = 'none';
        });
        const active = document.getElementById(sectionId);
        if (active) active.style.display = '';
    }

    function handleHash() {
        const hash = window.location.hash.replace('#', '') || 'home';
        showSection(hash);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const section = this.getAttribute('data-section');
            window.location.hash = section;
        });
    });

    window.addEventListener('hashchange', handleHash);
    handleHash();
});
