// Функция для переключения активного элемента навигации
export function activateNavigationLink() {
  // Получаем все элементы навигации
  const navLinks = document.querySelectorAll('.navigation__link');

  // Для каждого элемента навигации добавляем обработчик события клика
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
      // Удаляем класс navigation__link--active у всех элементов навигации
      navLinks.forEach((link) => {
        link.classList.remove('navigation__link--active');
      });

      // Добавляем класс navigation__link--active только к текущему элементу навигации
      event.target.classList.add('navigation__link--active');
    });
  });
}
