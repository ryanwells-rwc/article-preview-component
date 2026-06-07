const iconCircle = document.querySelector('.icon-circle');
const overlayLayer = document.querySelector('.overlay-layer');
const shareContainer = document.querySelector('.share-container');

iconCircle.addEventListener('click', () => {
  overlayLayer.classList.toggle('hidden');
  iconCircle.classList.toggle('invert');
  shareContainer.classList.toggle('active');
});