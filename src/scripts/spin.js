const forg = document.querySelector('#forg');

forg.addEventListener("mouseover",function(){
    forg.classList.remove('rotating');
    forg.classList.add('rotatingfast');
})

forg.addEventListener("mouseout",function(){
    forg.classList.remove('rotatingfast');
    forg.classList.add('rotating');    
})