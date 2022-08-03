function makeSliderGreatAgain(selector) {
  const slider = document.querySelector(selector);
  const slides = slider.querySelectorAll('#slide');

  slides[0].style.zIndex = '1000';

  let currentSlide = 0;
  let maxSlide = slides.length - 1;
  const nextBtn = document.querySelector('.intro-slider__btns-next');
  const prevBtn = document.querySelector('.intro-slider__btns-prev');

  const totalSlidesElement = document.querySelector(
    '.intro-slider__numbers-total'
  );
  const currentSlidesElement = document.querySelector(
    '.intro-slider__numbers-current'
  );

  totalSlidesElement.innerHTML = `0${slides.length}`;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
    currentSlidesElement.innerHTML = `0${currentSlide + 1}`;
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
    currentSlidesElement.innerHTML = `0${currentSlide + 1}`;
  });
}

makeSliderGreatAgain('.intro-slider');
