var userbtn = document.querySelector('.user__btn');
var logList = document.querySelector('.log__list');
userbtn.addEventListener('click', ()=>{
logList.classList.toggle('log__list__open')
});