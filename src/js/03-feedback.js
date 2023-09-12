import throttle from 'lodash.throttle';

const form = document.querySelector('.js-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const KEY_LS = 'feedback-form-state';

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  const value = { email: email.value, message: message.value };
  localStorage.setItem(KEY_LS, JSON.stringify(value));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Заповніть усі поля, будь-ласка!');
  }
  console.log(JSON.parse(localStorage.getItem(KEY_LS) ?? {}));
  form.reset();
  localStorage.removeItem(KEY_LS);
}

if (JSON.parse(localStorage.getItem(KEY_LS)) !== '') {
  const savedValue = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
  email.value = savedValue.email ?? '';
  message.value = savedValue.message ?? '';
}
