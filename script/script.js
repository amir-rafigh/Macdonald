const hamburger = document.getElementById('hamburger');
const list = document.querySelector('.list');
const openicon = document.getElementById('open-icon')
const closeicon = document.getElementById('close-icon')
const label = document.getElementById('label');

hamburger.addEventListener('click' ,  ()=>{
    
    list.classList.toggle('toggle');
    label.classList.toggle('label');


   

})