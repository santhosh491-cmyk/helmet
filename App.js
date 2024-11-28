function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  if (
    mobileNav.style.display === "none" ||
    mobileNav.style.display === ""
  ) {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
}
let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function moveSlide(direction) {
    items[currentIndex].style.display = 'none';

    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    items[currentIndex].style.display = 'block';
  }

  function initCarousel() {
    items.forEach((item, index) => {
      item.style.display = index === 0 ? 'block' : 'none'; // Show only the first image initially
    });
  }

  document.addEventListener('DOMContentLoaded', initCarousel);
