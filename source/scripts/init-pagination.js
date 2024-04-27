// pagination.js

export function initPagination() {
  const prevBtn = document.querySelector('.pagination-button-prev');
  const nextBtn = document.querySelector('.pagination-button-next');
  const pages = document.querySelectorAll('.pagination-button-page');
  let currentPage = 2;

  // Функция для обновления активной страницы
  function updateActivePage(page) {
    pages.forEach((p) => {
      if (Number(p.textContent) === page) {
        p.classList.add('pagination__button--active');
      } else {
        p.classList.remove('pagination__button--active');
      }
    });
    // Обновляем состояние кнопок после обновления активной страницы
    updateButtonStates();
  }

  // Функция для перехода на предыдущую страницу
  function goToPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      updateActivePage(currentPage);
    }
  }

  // Функция для перехода на следующую страницу
  function goToNextPage() {
    if (currentPage < pages.length) {
      currentPage++;
      updateActivePage(currentPage);
    }
  }

  // Функция для обновления состояния кнопок "вперед" и "назад"
  function updateButtonStates() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pages.length;
  }

  // Обработчики событий для кнопок навигации
  prevBtn.addEventListener('click', goToPrevPage);
  nextBtn.addEventListener('click', goToNextPage);

  // Обработчик событий для страниц
  pages.forEach((page) => {
    page.addEventListener('click', () => {
      if (!page.classList.contains('pagination__page-link--active')) {
        currentPage = Number(page.textContent);
        updateActivePage(currentPage);
      }
    });
  });

  // Вызываем функцию updateActivePage для инициализации активной страницы при загрузке
  updateActivePage(currentPage);
}
