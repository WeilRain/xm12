document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".feedback_slider img");
  let currentIndex = 2;

  function updateActiveImage() {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
  }

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateActiveImage();
  });

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateActiveImage();
  });

  updateActiveImage();
});
