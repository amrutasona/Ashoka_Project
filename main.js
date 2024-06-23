const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById('viewMoreBtn1').addEventListener('click', function() {
  loadMoreImages();
});

function loadMoreImages() {
  // Array of new image URLs
  const newImages = [
      'image4.jpg',
      'image5.jpg',
      'image6.jpg',
      // Add more image URLs as needed
  ];

  const imageGallery = document.getElementById('imageGallery');

  // Loop through new images and append them to the gallery
  newImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Image ${imageGallery.children.length + 1}`;
      imageGallery.appendChild(img);
  });
}

document.getElementById('viewMoreBtn1').addEventListener('click', function() {
  loadMoreContent();
});

function loadMoreContent() {
  const contentSection = document.getElementById('room');
  
  // New content to be loaded
  const newContent = `

      <div id="viewMoreBtn1">
          <li><img src="assets/room-1.jpg"alt="menu" /></li>
          <li><img src="assets/menu-3.jpg"alt="menu" /></li>
          <li><img src="assets/room-1.jpg"alt="menu" /></li>
        </div>
  `;

  // Append the new content to the existing content section
  contentSection.innerHTML += newContent;
}
document.getElementById('viewMoreBtn2').addEventListener('click', function() {
  loadMoreContent();
});

function loadMoreContent() {
  const contentSection = document.getElementById('room');
  
  // New content to be loaded
  const newContent = `

      <div id="viewMoreBtn2">
          <img src="assets/room-1.jpg"alt="menu" />
          <img src="assets/news2.jpg" alt="menu" />
          <img src="assets/news3.jpg" alt="menu" />
        </div>
  `;

  // Append the new content to the existing content section
  contentSection.innerHTML += newContent;
}
document.getElementById('viewMoreBtn3').addEventListener('click', function() {
  loadMoreContent();
});

function loadMoreContent() {
  const contentSection = document.getElementById('room');
  
  // New content to be loaded
  const newContent = `

      <div id="viewMoreBtn3">
          <img src="assets/room-1.jpg"alt="menu" />
          <img src="assets/news2.jpg" alt="menu" />
          <img src="assets/news3.jpg" alt="menu" />
        </div>
  `;

  // Append the new content to the existing content section
  contentSection.innerHTML += newContent;
}
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    // const slidesContainer = document.querySelector('.slides');
    // slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Optional: Auto slide
let autoSlideInterval = setInterval(() => moveSlide(1), 3000);
// function scrollToBottom() {
//   window.scrollTo({
//     top: document.body.scrollHeight,
//     behavior: 'smooth'
//   });
// }






// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to scroll to the bottom
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Show/hide buttons based on scroll position
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var goTopBtn = document.getElementById("goTopBtn");
  var goBottomBtn = document.getElementById("goBottomBtn");

  // Show "Go to Top" button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }

  // Show "Go to Bottom" button
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    goBottomBtn.classList.remove("show");
  } else {
    goBottomBtn.classList.add("show");
  }
}


