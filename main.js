function randomNum(start, end){
    return Math.floor(start + Math.random()*(end - start))
}

function randomHeart(i){
    setTimeout(()=>{
        let heart = document.createElement('div')
        heart.classList.add('heart')
        heart.innerHTML = `
            <div class="heartbeat">❤️</div>
            <div class="heartecho">❤️</div>
        `
        let rdX = randomNum(50, 400)
        if(i % 2 == 0){
            rdX = randomNum(window.innerWidth * 0.7, window.innerWidth-50)
        }
        heart.style.top = `${randomNum(100, 700)}px`
        heart.style.left = `${rdX}px`
        document.body.appendChild(heart)
    }, i * 500)
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    
    for (let i = 1; i <= 20; i++) {
        randomHeart(i)
    }
    
  };
  