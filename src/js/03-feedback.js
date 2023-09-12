import throttle from 'lodash.throttle';

const elements = {
  form: document.querySelector('.js-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
const KEY_LS = 'feedback-form-state';

elements.form.addEventListener('input', throttle(handlerInput, 500));
elements.form.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  const value = { email: elements.email.value, message: elements.message.value };
  localStorage.setItem(KEY_LS, JSON.stringify(value));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  if (elements.email.value === '' || elements.message.value === '') {
    return alert('Заповніть усі поля, будь-ласка!');
  }
  console.log(JSON.parse(localStorage.getItem(KEY_LS) ?? {}));
  elements.form.reset();
  localStorage.removeItem(KEY_LS);
}

if (JSON.parse(localStorage.getItem(KEY_LS)) !== '') {
  const savedValue = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
  elements.email.value = savedValue.email ?? '';
  elements.message.value = savedValue.message ?? '';
}
