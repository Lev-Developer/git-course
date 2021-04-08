/*const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    function animOneScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemoffset =  offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart; 

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart; 

            }

            if ((pageYOffset > animItemoffset - animItemPoint) && pageYOffset < (animItemoffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }

        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }
    setTimeout(() => {
        animOneScroll();
    }, 300);
   
}*/
var header = document.querySelector('.header');
window.onscroll = function showHeader(){

       
        console.log('hello');
        if (window.pageYOffset > 200){
            header.classList.add('.moveHeader');
    }else{
        header.classList.remove('.moveHeader');
    }
}

 