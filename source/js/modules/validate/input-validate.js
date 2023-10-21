const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');
let isValid = false;

const initValidate = () => {
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    if (!isValid) {
      event.preventDefault();

      form.classList.add('is-fail');
      setTimeout(() => {
        form.classList.remove('is-fail');
      }, 300);
    }
  });

  form.addEventListener('input', () => {
    const invalidChars = /[@#$%^&*()!]/g;
    input.value = input.value.replace(invalidChars, '');

    if (input.value.length < input.minLength) {
      isValid = false;
    } else {
      isValid = true;
    }
  });
};

export {initValidate};
