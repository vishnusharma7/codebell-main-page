
// top left hide in mobile view 
document.addEventListener('DOMContentLoaded', function () {
    const menuToolbarMobile = document.querySelector('.menu-toolbar-mobile');
    const menuPopup = document.querySelector('.menu-popup');
    
    menuToolbarMobile.addEventListener('click', function () {
        if (menuPopup.style.display === 'flex') {
            menuPopup.style.display = 'none';
        } else {
            menuPopup.style.display = 'flex';
        }
    });
    
    document.addEventListener('click', function (event) {
        if (!menuToolbarMobile.contains(event.target) && !menuPopup.contains(event.target)) {
            menuPopup.style.display = 'none';
        }
    });

    if (window.innerWidth >= 1200) {
        menuPopup.style.display = 'none';
    }
});
