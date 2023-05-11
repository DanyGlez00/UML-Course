const radioButtons = document.querySelectorAll('.form-input-radio-buttons label');
const checkButtons = document.querySelectorAll('.form-checkbox label');

  radioButtons.forEach((label) => {
    label.addEventListener('keydown', (event) => {
      if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        const input = label.querySelector('input');
        input.checked = true;
      }
    });
  });

  checkButtons.forEach((label) => {
    label.addEventListener('keydown', (event) => {
      if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        const input = label.querySelector('input');
        input.checked = !input.checked;
      }
    });
  });