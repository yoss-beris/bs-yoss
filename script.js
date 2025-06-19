let currentIndex = 0;

function moveSlide(step) {
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll("img").length;

  currentIndex += step;

  // Loop infinito
  if (currentIndex >= slides) currentIndex = 0;
  if (currentIndex < 0) currentIndex = slides - 1;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
