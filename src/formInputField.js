const inputFields = document.querySelectorAll('.input-field');

inputFields.forEach((input) => {
  input.addEventListener('focus', () => {
    input.previousElementSibling.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.previousElementSibling.classList.remove('active');
    }
  });
});
