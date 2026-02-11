const authWrapper = ducument.querySelector('.aut-wrapper');
const loginTrigger = document.querySelector ('.login-trigger');
const registerTrigger = document.querySelector('.regsiter-trigger');


registerTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  authWrapper.classList.add('toggled');
});
 
loginTrigger.addEventListener('click', (e) => {
e.preventDefault();
authWrapper.classList.remove('toggled');
});