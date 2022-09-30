import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name = "email"]');
const messageEl = document.querySelector('[name = "message"]');

formEl.addEventListener('input', throttle(inputHandler, 500));
formEl.addEventListener('submit', submitHandler);

const savedData = localStorage.getItem('feedback-form-state');
const parsedata = JSON.parse(savedData);

if (parsedata) {
  emailEl.value = parsedata.email;
  messageEl.value = parsedata.message;
}
console.log(localStorage);

function inputHandler() {
  let email = emailEl.value;
  let message = messageEl.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}

function submitHandler(event) {
  event.preventDefault();
  let email = event.target.elements.email.value;
  let message = event.target.elements.message.value;

  if (email === '' || message === '') {
    return alert('please fill the form');
  }

  const data = { message, email };
  console.log(data);

  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}
