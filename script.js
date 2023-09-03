
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

  changeText(); // Initial text change

  let intervalId = setInterval(changeText, 5000);


  // ============================section 2 card animation======================
// Function to add the "animate" class to cards one by one when they are in the viewport
function animateCardsSequentially(entries, observer) {
  let delay = 0;

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, delay);
      delay += 200; // Adjust the delay as needed
    }
  });
}

// Create an Intersection Observer
const cardObserver = new IntersectionObserver(animateCardsSequentially, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2, // Adjust the threshold as needed
});

// Get the cards
const cards = document.querySelectorAll('.card-details');

// Observe each card element
cards.forEach((card) => {
  cardObserver.observe(card);
});
