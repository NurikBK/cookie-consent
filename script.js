const modal = document.querySelector('#modal');
const closeModalBtn = document.querySelector('#modal-close-btn');

closeModalBtn.addEventListener('click', () => (modal.style.display = 'none'));

setTimeout(() => {
  modal.style.display = 'inline';
}, 1500);
