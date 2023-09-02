
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



  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Calculate the opacity and blur values based on the scroll position
    const opacity = Math.min(0.8, scrollY / 200); // Adjust 200 to control when the effect starts
    const blur = Math.min(5, scrollY / 10); // Adjust 10 to control the blur intensity

    // Apply the updated styles to the navbar
    nav.style.backgroundColor = `rgba(255, 255, 255, ${0})`;
    nav.style.backdropFilter = `blur(${20}px)`;
  });

