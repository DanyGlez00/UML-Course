const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((button) => {
    button.addEventListener('keydown', (event) => {
      if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        button.checked = true;
      }
    });
  });