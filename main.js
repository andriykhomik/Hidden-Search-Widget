const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=>{
    // if (search.className.includes('active')){
    //     search.classList.remove('active');
    // } else {
    //     search.classList.add('active');
    // }
    search.classList.toggle('active');
    input.focus();
})
