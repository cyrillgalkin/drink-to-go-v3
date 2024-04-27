const priceRange = document.querySelector('.filters__price-range');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');
const resetButton = document.querySelector('.button--reset');

function createSlider() {
  noUiSlider.create(priceRange, {
    start: [0, 900],
    connect: true,
    range: {
      min: 0,
      max: 1000,
    },
    step: 1,
  });
}

function handlePriceRangeUpdate(values, handle) {
  const fields = [minPrice, maxPrice];
  fields[handle].value = Number(values[handle]);
}

function handlePriceChange(e) {
  const target = e.target;
  const value = Number(target.value);

  // Определяем, какое поле изменилось
  const isMin = target === minPrice;

  // Обновляем слайдер в зависимости от измененного поля
  if (isMin) {
    priceRange.noUiSlider.set([value, null]);
  } else {
    priceRange.noUiSlider.set([null, value]);
  }
}

function handleReset() {
  priceRange.noUiSlider.set([0, 1000]);
}

export function initPriceSlider() {
  createSlider();
  priceRange.noUiSlider.on('update', handlePriceRangeUpdate);

  minPrice.addEventListener('change', handlePriceChange);
  maxPrice.addEventListener('change', handlePriceChange);
  resetButton.addEventListener('click', handleReset);
}
