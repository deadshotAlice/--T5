const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;
toggle.onclick = () => {
  root.classList.toggle('dark')
}
// 换主题

const old = document.querySelector('.nav-avatar');
const img = new Image();
img.onload = () => {
  const S = 100;                       
  const cropRatio = 0.9;              
  const fx = 0.5, fy = 0.5;       
  const side = Math.min(img.width, img.height) * cropRatio;
  const sx = Math.max(0, img.width  * fx - side / 2);   
  const sy = Math.max(0, img.height * fy - side / 2);   
  const canvas = document.createElement('canvas');
  canvas.className = 'nav-avatar';     
  canvas.width = canvas.height = S;    
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, sx, sy, side, side, 0, 0, S, S);   
  old.replaceWith(canvas);             
};
img.src = 'imagefufu.jpg';

// 照片裁剪

const egg1=document.getElementById("tragedy");
const egg2=document.getElementById("buskin");
const egg3=document.getElementsByClassName("hero-reality");

function coloredeggA(element,one,two){
    let timerA=null;
    element.addEventListener('click',()=>{
        if(timerA){
            clearTimeout(timerA);
            timerA=null;
            return;
        }
           timerA=setTimeout(()=>{
            alert(one);
            timerA=null;
    },300);
    })
    element.addEventListener('dblclick',()=>{
        clearTimeout(timerA);
        timerA=null;
        alert(two);
    })
}
coloredeggA(egg1,"不是，这让我很伤心。","别闹了，我不喜欢这样。");
coloredeggA(egg2,"我都说了，不可以。","服了你了，行吧行吧。")
// 改天想个三击出来
    let timerB=null;
egg1.addEventListener('mouseenter',()=>{
    clearTimeout(timerB);
    timerB=setTimeout(()=>{
        alert("别弄啦！！！")
    },3000)
})
egg1.addEventListener('mouseleave',()=>{
    clearTimeout(timerB);
    timerB=null;
})
egg2.addEventListener('mouseenter',()=>{
    clearTimeout(timerB);
    timerB=setTimeout(()=>{
        alert("别弄啦！！！")
    },3000)
})
egg2.addEventListener('mouseleave',()=>{
    clearTimeout(timerB);
    timerB=null;
})

//彩蛋
let carouselImg=document.getElementById('carouselImg');
let span=document.querySelectorAll('span')
let left=document.querySelector('#left')
let right=document.querySelector('#right')
let timer=0;
let index=0;
function show(){
    carouselImg.src=`img/lucy${index+1}.jpg`
}
show();
function autoShow(){
    timer=setInterval(() => {
        if(index==span.length-1){
            index=0;
            show();

        }
        else{
            index++;
            show();
        }
    }, 2000);
}
autoShow();
function clickArrow(){
    left.addEventListener('click',function(){
        clearInterval(timer);
        if(index==0){
            index=span.length-1;
            show();
            autoShow();
        }
        else{
            index--;
            show();
            autoShow();
        }
    })
        right.addEventListener('click',function(){
            clearInterval(timer);
        if(index==span.length-1){
            index=0;
            show();
            autoShow();
        }
        else{
            index++;
            show();
            autoShow();
        }
    }
)
}
clickArrow();
function clickSpot(){
    for(let i=0;i<=span.length-1;i++){
        span[i].addEventListener('click',function(){
            clearInterval(timer);
            index=i;
            show();
            autoShow();
        })
    }
}
clickSpot();

//轮播图
