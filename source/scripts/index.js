import { activateNavigationLink } from './activate-navigation-link.js';
import { createDropdown } from './create-dropdown.js';
import { createMap } from './create-map.js';
import { createMobileMenuToggle } from './create-mobile-menu-toggle.js';
import { initPagination } from './init-pagination.js';
import { initPriceSlider } from './init-price-slider.js';
import { initSlider } from './init-slider.js';

// Вызываем функции после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  activateNavigationLink();
  createMobileMenuToggle();
  initPagination();
  initSlider();
  initPriceSlider();
  createDropdown();
  createMap();
});
