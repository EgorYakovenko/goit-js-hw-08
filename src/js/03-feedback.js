import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


function saveFormData() {
  const formData = {
    email: emailInput.value,
      message: messageInput.value,
  };
    
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}

function handleSubmit(event) {
  event.preventDefault();
 
  localStorage.removeItem('feedback-form-state');
  
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  if (emailInput.value !== '' && messageInput.value !== '') {
    console.log('Form data:', formData);
  } else {
    alert('Заполните все поля')
  }
    
  emailInput.value = '';
  messageInput.value = '';
}
  
form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', handleSubmit);

loadFormData();


