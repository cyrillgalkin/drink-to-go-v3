const slides = document.querySelectorAll('.hero__item');
const controls = document.querySelectorAll('.slider-pagination__control');
const prevButton = document.querySelector('.hero__prev-button');
const nextButton = document.querySelector('.hero__next-button');
const initialSlideIndex = 0;

// Функция для обработки клика по кнопке пагинации для управления слайдером
function handleControlClick(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  if (
    controls[index].classList.contains('slider-pagination__control--active')
  ) {
    return;
  }

  updateSlider(index);
}

// Функция для обработки клика по кнопке "назад"
function handlePrevClick() {
  const currentIndex = getCurrentSlideIndex();
  // Проверяем, является ли текущий слайд первым
  if (currentIndex === 0) {
    return; // Не выполняем никаких действий
  }
  const prevIndex = currentIndex - 1;
  updateSlider(prevIndex);
}

// Функция для обработки клика по кнопке "вперед"
function handleNextClick() {
  const currentIndex = getCurrentSlideIndex();
  // Проверяем, является ли текущий слайд последним
  if (currentIndex === slides.length - 1) {
    return; // Не выполняем никаких действий
  }
  const nextIndex = currentIndex + 1;
  updateSlider(nextIndex);
}

// Получить индекс текущего активного слайда
function getCurrentSlideIndex() {
  return Array.from(slides).findIndex((slide) =>
    slide.classList.contains('hero__item--active')
  );
}

// Функция для обновления слайдера при клике
function updateSlider(index) {
  updateSlides(index);
  updateControls(index);
}

// Функция для обновления активного слайда
function updateSlides(index) {
  slides.forEach((slide) => slide.classList.remove('hero__item--active'));
  slides[index].classList.add('hero__item--active');
}

// Функция для обновления активной кнопки управления
function updateControls(index) {
  controls.forEach((control) =>
    control.classList.remove('slider-pagination__control--active')
  );
  controls[index].classList.add('slider-pagination__control--active');

  // Отключение кнопки "назад" на первом слайде
  prevButton.disabled = index === 0;
  // Отключение кнопки "вперед" на последнем слайде
  nextButton.disabled = index === slides.length - 1;
}

// Инициализация слайдера
export function initSlider() {
  controls.forEach((control, index) => {
    control.addEventListener('click', () => {
      handleControlClick(index);
    });
  });

  updateSlider(initialSlideIndex);

  prevButton.addEventListener('click', handlePrevClick);
  nextButton.addEventListener('click', handleNextClick);
}
