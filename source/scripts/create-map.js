/* eslint-disable no-undef */
export function createMap() {
  const mapImage = document.querySelector('.map__image');
  mapImage.classList.add('map__image--hidden');

  const map = L.map('map').setView([59.968322, 30.317359], 18);
  const icon = L.icon({
    iconUrl: './images/map-pin.svg',
    iconSize: [38, 50],
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  L.marker([59.968322, 30.317359], { icon }).addTo(map);
}
