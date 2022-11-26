const modal = document.querySelector('#modal');
const closeModalBtn = document.querySelector('#modal-close-btn');
const modalForm = document.querySelector('#modal-form');

const modalText = document.querySelector('#modal-text');

closeModalBtn.addEventListener('click', () => (modal.style.display = 'none'));

setTimeout(() => {
  modal.style.display = 'inline';
}, 1500);

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

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
    document.querySelector('#modal-inner').innerHTML = `
    <h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);

  setTimeout(() => {
    modal.style.display = 'none';
  }, 10000);

});
