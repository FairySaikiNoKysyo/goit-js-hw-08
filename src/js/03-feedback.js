import throttle from 'lodash.throttle';
const elements = {
    form: document.querySelector(".js-form"),
    // input: document.querySelector('input'),
    // textArea: document.querySelector('textarea'),
}

const KEY_LS = "feedback-form-state"
let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
const {email,message} = elements.form.elements;
email.value = data.email ?? '';
message.value = data.message ?? '';

elements.form.addEventListener("input",throttle(handleLog,500));
elements.form.addEventListener("submit",handlerSubmit)
function handleLog(evt){
    data[evt.target.name]= evt.target.value

localStorage.setItem(KEY_LS, JSON.stringify(data))
}
function handlerSubmit(evt){
    evt.preventDefault();
    data = {};
    elements.form.reset();
    localStorage.removeItem(KEY_LS);
    
}
