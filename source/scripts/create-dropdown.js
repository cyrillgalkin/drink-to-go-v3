export function createDropdown() {
  const dropdown = document.querySelector('.dropdown');
  const options = document.querySelectorAll('.dropdown__option');
  const value = document.querySelector('.dropdown__value');

  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown--open');
  });

  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      options.forEach((link) => {
        link.classList.remove('dropdown__option--active');
      });

      event.target.classList.add('dropdown__option--active');
      value.textContent = event.target.textContent;
    });
  });
}
