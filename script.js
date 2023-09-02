
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

    const opacity = Math.min(0.8, scrollY / 200); // Adjust 200 to control when the effect starts
    const blur = Math.min(5, scrollY / 10); 

   
    nav.style.backgroundColor = `rgba(255, 255, 255, ${0})`;
    nav.style.backdropFilter = `blur(${20}px)`;
  });



  

  const changingText = document.getElementById('changing-text');
  const texts = [
    'No more missed Visitor',
    'Stay in touch with your neighbours',
    'Eliminate fake delivery attempts',
  ];
  let currentIndex = 0;

  function changeText() {
    changingText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }

  setInterval(changeText, 3000); // Change text every second

