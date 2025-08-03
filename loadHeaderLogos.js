// Dynamically loads all logo images from static/logos/ into the element with id 'header-logos'.
function loadHeaderLogos() {
    const logosDiv = document.getElementById('header-logos');
    if (!logosDiv) return;
    // List all files in static/logos/ (manually updated for static HTML):
    const logoFiles = [
        'full_run.png',
        'hilo.png',
        'pcl.jpg',
        'rema_tip_top.png'
    ];
    logoFiles.forEach(function(file) {
        var img = document.createElement('img');
        img.src = 'static/logos/' + file;
        img.className = 'header-logo';
        img.alt = file.replace(/\.[^.]+$/, '') + ' Logo';
        img.onerror = function() {
            this.style.display = 'none';
            this.alt = 'Logo not found';
        };
        logosDiv.appendChild(img);
    });
}
