// Функция для создания переключателя мобильного меню
export function createMobileMenuToggle() {
  // Находим кнопку переключения мобильного меню и само меню по селекторам
  const toggleButton = document.querySelector('.js-toggle-button');
  const menu = document.querySelector('.navigation');
  const header = document.querySelector('.header--without-js');

  header.classList.remove('header--without-js');
  toggleButton.classList.remove('header__toggle-button--without-js');
  menu.classList.toggle('navigation--open-mobile');

  // Добавляем обработчик события клика на кнопку переключения
  toggleButton.addEventListener('click', () => {
    // Переключаем класс для изменения иконки у кнопки переключения
    toggleButton.classList.toggle('header__toggle-button--close');
    // Переключаем класс для открытия/закрытия мобильного меню
    menu.classList.toggle('navigation--open-mobile');
  });
}
