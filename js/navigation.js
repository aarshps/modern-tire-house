// SPA navigation for Modern Tire House SPC

document.addEventListener('DOMContentLoaded', function () {
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.spa-section').forEach(sec => {
            sec.style.display = 'none';
            sec.classList.remove('active');
        });
        
        // Show active section
        const active = document.getElementById(sectionId);
        if (active) {
            active.style.display = 'block';
            active.classList.add('active');
        }
        
        // Update navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function handleHash() {
        const hash = window.location.hash.replace('#', '') || 'home';
        showSection(hash);
    }

    // Add click handlers to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            window.location.hash = section;
        });
    });

    // Handle hash changes
    window.addEventListener('hashchange', handleHash);
    
    // Initialize on page load
    handleHash();
});
