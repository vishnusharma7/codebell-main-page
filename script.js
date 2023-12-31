
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



  //=================================heading text animation==========================
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


  // ============================section 6 card animation======================

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate elements sequentially when they enter the viewport
function animateSection6Cards() {
  const section6Cards = document.querySelectorAll('.section6-cards');

  section6Cards.forEach((card, index) => {
    if (isElementInViewport(card)) {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 200); // Adjust the delay as needed (200ms delay between each card)
    }
  });
}

// Add a scroll event listener to trigger the animations
window.addEventListener('scroll', animateSection6Cards);

// Initially, trigger the animations for elements in the viewport when the page loads
animateSection6Cards();
