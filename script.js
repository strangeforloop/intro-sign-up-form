document.getElementById('form').addEventListener('submit', (e) => {
  const form = document.getElementById('form');
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  e.preventDefault();

  if (firstName === '') {
    addErrorToField('first-name', 'First name cannot be empty');
  } else {  
    removeError('first-name');
  }
  if (lastName === '') {
    addErrorToField('last-name', 'Last name cannot be empty');
  } else {   
    removeError('last-name');
  }  
  if (!isValid(email)) {
    addErrorToField('email', 'Looks like this is not an email');
  } else {
    removeError('email');
  }
  if (password === '') {
    addErrorToField('password', 'Password cannot be empty');
  } else {   
    removeError('password');
  }

  if (firstName && lastName && isValid(email) && password) {
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
});

function addErrorToField(elementId, message) {
  const formControl = form[elementId].parentNode;
  formControl.classList.add('error');

  const smallElement = form[elementId].parentElement.querySelector('small');
  smallElement.innerText = message;
  // smallElement.style.opacity = 1;
}

function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function removeError(elementId) {
  const formControl = form[elementId].parentNode;
  formControl.classList.remove('error');

  // const smallElement = form[elementId].nextElementSibling;
  // smallElement.style.opacity = 0;
}