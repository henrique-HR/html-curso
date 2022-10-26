const men = window.document.querySelector('#men')
const burguer = document.querySelector('#burguer')


burguer.addEventListener('click', ()=>{
    if (men.style.display =='block'){
        men.style.display = 'none' 
        men.style.transition = '2s'
    }else{
        men.style.display ='block'
    }
})

window.addEventListener('resize', ()=>{
     if( window.innerWidth >= 768 ){
         men.style.display = 'block'
        }else{
            men.style.display ='none'
        }
})