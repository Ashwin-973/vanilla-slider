//TODO : add aria accessibility and keyboard support
//TODO : implement touch/swipe navigation
//TODO : implement throttling (for nav-btn clicks)
//TODO : setup autoplay and pause on hover


const slideTrack=document.querySelector('.slider-track')
const dotsContainer=document.querySelector('.dots-container')
const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')


const slides=Array.from(slideTrack.children)

// state has been set
let currentIndex=0;

const updateTrack=()=>{
    const movement=-1*currentIndex*100;

    slideTrack.style.transform=`translateX(${movement}%)`;

    const dots=document.querySelectorAll('.dot')
    dots.forEach((d,idx)=>
    {
        d.classList.remove('active')
    })

    dots[currentIndex].classList.add('active')
}

// dynamically add dots
slides.forEach((_,idx)=>
{
    const dot=document.createElement('div');
    dot.classList.add('dot')
    if(idx==0) dot.classList.add('active');

    dot.addEventListener('click',()=>{
        currentIndex=idx;
        updateTrack()
    })

    dotsContainer.append(dot);
})



//event listeners added
prevBtn.addEventListener('click',(e)=>
{
    if(currentIndex==0){
        currentIndex=slides.length-1;
    }
    else{
        currentIndex--;
    }

    updateTrack();
    
})
nextBtn.addEventListener('click',(e)=>
{
    if(currentIndex==slides.length-1){
        currentIndex=0;
    }
    else{
        currentIndex++;
    }

    updateTrack();
    
})




