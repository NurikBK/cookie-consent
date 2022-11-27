const modal = document.querySelector('#modal');
const closeModalBtn = document.querySelector('#modal-close-btn');
const modalForm = document.querySelector('#modal-form');
const modalText = document.querySelector('#modal-text');
const declineBtn = document.querySelector('#decline-btn');

closeModalBtn.addEventListener('click', () => (modal.style.display = 'none'));

setTimeout(() => {
  modal.style.display = 'inline';
}, 1500);

declineBtn.addEventListener('mouseenter', () => {
  document.querySelector('#modal-choice-btns').classList.toggle('reverse');
});

// applying the modal joke
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginFormData = new FormData(modalForm);
  const fullName = loginFormData.get('fullName');

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
  </div>
`;

  setTimeout(() => {
    document.querySelector('#uploadText').innerText = 'Making the sale...';
  }, 1500);

  setTimeout(() => {
    closeModalBtn.disabled = false;
    document.querySelector('#modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});
