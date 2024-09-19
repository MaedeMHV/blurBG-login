let bg=document.querySelector('.bg')
let pass=document.querySelector('#pass')

pass.addEventListener('input',e=>{
  
   let length= 20-e.target.value.length*2;
    console.log(length);
    bg.style.filter=`blur(${length}px)`
   
})