const bungkus = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
var audio = document.getElementById("#suara");

const wrapperRect = bungkus.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () =>
{
   window.location.href = "isi.html"    
     audio.play();
  })
noBtn.addEventListener('mouseover', () =>{
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;
  
  noBtn.style.left = i +'px';
  noBtn.style.top = j +'px';
})

