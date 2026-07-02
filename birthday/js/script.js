// ==========================================
// Birthday Website V2
// Created for Ashlesha ❤️
// ==========================================


// ==========================================
// LOADER
// ==========================================

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

});


// ==========================================
// TYPING EFFECT
// ==========================================

const typingText=[

"You are my favourite person ❤️",

"Thank you for every smile 😊",

"Thank you for every memory 📸",

"Forever Best Friends 💖",

"Happy Birthday Ashlesha 🎂"

];

let textIndex=0;
let charIndex=0;

const typing=document.querySelector(".typing");

function typeWriter(){

if(charIndex<typingText[textIndex].length){

typing.innerHTML+=typingText[textIndex].charAt(charIndex);

charIndex++;

setTimeout(typeWriter,70);

}

else{

setTimeout(eraseText,1800);

}

}

function eraseText(){

if(charIndex>0){

typing.innerHTML=typingText[textIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseText,40);

}

else{

textIndex++;

if(textIndex>=typingText.length){

textIndex=0;

}

setTimeout(typeWriter,500);

}

}

typeWriter();


// ==========================================
// NAVBAR BACKGROUND
// ==========================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(20,0,35,.85)";

header.style.boxShadow="0 8px 25px rgba(0,0,0,.4)";

}

else{

header.style.background="rgba(20,0,35,.35)";

header.style.boxShadow="none";

}

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const reveals=document.querySelectorAll(

".story-card,.memory-card,.gallery,.memory-wall,.letter-section,.gift-section,.cake-section,.final-section"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reveals.forEach(item=>{

item.classList.add("fade-up");

revealObserver.observe(item);

});


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

target.scrollIntoView({

behavior:"smooth"

});

});

});


// ==========================================
// SURPRISE BUTTON
// ==========================================

document.getElementById("surpriseBtn").onclick=()=>{

window.scrollTo({

top:document.querySelector("#story").offsetTop-80,

behavior:"smooth"

});

}
// ==========================================
// PREMIUM PHOTO SLIDER
// ==========================================

const photos = [

"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg",
"images/photo9.jpg",
"images/photo10.jpg"

];

let currentPhoto = 0;

const sliderImage = document.getElementById("sliderImage");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const dots = document.querySelectorAll(".dot");


// ==========================================
// SHOW IMAGE
// ==========================================

function showPhoto(index){

sliderImage.style.opacity = "0";

sliderImage.style.transform = "scale(.95)";

setTimeout(()=>{

sliderImage.src = photos[index];

sliderImage.style.opacity = "1";

sliderImage.style.transform = "scale(1)";

},250);

updateDots();

}


// ==========================================
// UPDATE DOTS
// ==========================================

function updateDots(){

dots.forEach(dot=>{

dot.classList.remove("active");

});

dots[currentPhoto].classList.add("active");

}


// ==========================================
// NEXT BUTTON
// ==========================================

nextBtn.addEventListener("click",()=>{

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

showPhoto(currentPhoto);

});


// ==========================================
// PREVIOUS BUTTON
// ==========================================

prevBtn.addEventListener("click",()=>{

currentPhoto--;

if(currentPhoto<0){

currentPhoto=photos.length-1;

}

showPhoto(currentPhoto);

});


// ==========================================
// DOT CLICK
// ==========================================

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentPhoto=index;

showPhoto(currentPhoto);

});

});


// ==========================================
// AUTO SLIDE
// ==========================================

setInterval(()=>{

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

showPhoto(currentPhoto);

},4000);


// ==========================================
// IMAGE HOVER EFFECT
// ==========================================

sliderImage.addEventListener("mouseenter",()=>{

sliderImage.style.transform="scale(1.05)";

});

sliderImage.addEventListener("mouseleave",()=>{

sliderImage.style.transform="scale(1)";

});


// ==========================================
// KEYBOARD SUPPORT
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});


// ==========================================
// INITIAL LOAD
// ==========================================

showPhoto(currentPhoto);

// ==========================================
// MEMORY WALL POPUP
// ==========================================

const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

const memoryPhotos = document.querySelectorAll(".memory-photo img");

memoryPhotos.forEach(photo => {

    photo.addEventListener("click", () => {

        imagePopup.style.display = "flex";

        popupImage.src = photo.src;

        popupImage.style.opacity = "0";

        popupImage.style.transform = "scale(.8)";

        setTimeout(() => {

            popupImage.style.opacity = "1";

            popupImage.style.transform = "scale(1)";

        }, 50);

        document.body.style.overflow = "hidden";

    });

});


// ==========================================
// CLOSE POPUP BUTTON
// ==========================================

closePopup.addEventListener("click", closeImagePopup);


// ==========================================
// CLICK OUTSIDE IMAGE
// ==========================================

imagePopup.addEventListener("click", (e) => {

    if(e.target === imagePopup){

        closeImagePopup();

    }

});


// ==========================================
// ESC KEY CLOSE
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeImagePopup();

    }

});


// ==========================================
// CLOSE FUNCTION
// ==========================================

function closeImagePopup(){

    popupImage.style.opacity="0";

    popupImage.style.transform="scale(.8)";

    setTimeout(()=>{

        imagePopup.style.display="none";

        document.body.style.overflow="auto";

    },200);

}


// ==========================================
// MEMORY PHOTO HOVER
// ==========================================

memoryPhotos.forEach(photo=>{

    photo.addEventListener("mouseenter",()=>{

        photo.style.transform="scale(1.06)";

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform="scale(1)";

    });

});


// ==========================================
// PRELOAD IMAGES
// ==========================================

memoryPhotos.forEach(photo=>{

    const img=new Image();

    img.src=photo.src;

});

// ==========================================
// ENVELOPE
// ==========================================

const envelope=document.getElementById("envelope");

if(envelope){

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

const letter=envelope.querySelector(".letter");

const front=envelope.querySelector(".envelope-front");

if(envelope.classList.contains("open")){

front.style.transform="rotateX(180deg)";

letter.style.transform="translate(-50%,-60%)";

letter.style.opacity="1";

}

else{

front.style.transform="rotateX(0deg)";

letter.style.transform="translate(-50%,-50%)";

letter.style.opacity=".9";

}

});

}


// ==========================================
// GIFT BOX
// ==========================================

const giftBox=document.getElementById("giftBox");
const giftCard=document.getElementById("giftCard");

if(giftBox){

giftBox.addEventListener("click",()=>{

giftBox.style.transform="scale(1.15) rotate(8deg)";

giftBox.querySelector(".gift-lid").style.transform=
"translateY(-35px) rotate(-12deg)";

setTimeout(()=>{

giftCard.style.display="block";

giftCard.scrollIntoView({

behavior:"smooth"

});

createConfetti();

fireworks();

},700);

});

}


// ==========================================
// BIRTHDAY CAKE
// ==========================================

const cake=document.querySelector(".cake");

if(cake){

cake.addEventListener("click",()=>{

const flame=document.querySelector(".flame");

flame.style.boxShadow=

"0 0 30px yellow,0 0 60px orange,0 0 90px gold";

cake.style.transform="scale(1.08)";

createConfetti();

fireworks();

setTimeout(()=>{

cake.style.transform="scale(1)";

},1000);

});

}


// ==========================================
// CELEBRATE BUTTON
// ==========================================

const celebrate=document.getElementById("celebrateBtn");

if(celebrate){

celebrate.addEventListener("click",()=>{

createConfetti();

fireworks();

alert(

"🎂 Happy Birthday Ashlesha ❤️\n\nMay all your dreams come true!\nStay happy forever! 💖"

);

});

}


// ==========================================
// CONFETTI
// ==========================================

function createConfetti(){

for(let i=0;i<150;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=

`hsl(${Math.random()*360},100%,60%)`;

confetti.style.animation=

`fall ${2+Math.random()*2}s linear forwards`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},4000);

}

}

const confettiStyle=document.createElement("style");

confettiStyle.innerHTML=`

@keyframes fall{

100%{

transform:translateY(120vh) rotate(720deg);

opacity:0;

}

}

`;

document.head.appendChild(confettiStyle);


// ==========================================
// FIREWORKS
// ==========================================

function fireworks(){

for(let i=0;i<100;i++){

const fw=document.createElement("div");

fw.className="firework";

fw.style.left="50%";

fw.style.top="50%";

fw.style.background=

`hsl(${Math.random()*360},100%,60%)`;

fw.style.setProperty("--x",(Math.random()*2-1));

fw.style.setProperty("--y",(Math.random()*2-1));

fw.style.animation="explode 1.2s forwards";

document.body.appendChild(fw);

setTimeout(()=>{

fw.remove();

},1200);

}

}

const fireStyle=document.createElement("style");

fireStyle.innerHTML=`

@keyframes explode{

100%{

transform:

translate(

calc(var(--x)*260px),

calc(var(--y)*260px)

);

opacity:0;

}

}

`;

document.head.appendChild(fireStyle);

// ==========================================
// CURSOR HEART TRAIL
// ==========================================

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.className="cursor-heart";

heart.innerHTML="💖";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},900);

});


// ==========================================
// FALLING PETALS
// ==========================================

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

},700);


// ==========================================
// FLOATING BALLOONS
// ==========================================

const balloons=["🎈","🎈","🎈","🎈","🎈"];

setInterval(()=>{

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML=

balloons[Math.floor(Math.random()*balloons.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=

(10+Math.random()*8)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},18000);

},3500);


// ==========================================
// SPARKLE PARTICLES
// ==========================================

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.width="4px";

sparkle.style.height="4px";

sparkle.style.borderRadius="50%";

sparkle.style.background="white";

sparkle.style.boxShadow=

"0 0 10px white,0 0 20px hotpink";

sparkle.style.pointerEvents="none";

sparkle.style.opacity="1";

sparkle.style.transition="2s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity="0";

},100);

setTimeout(()=>{

sparkle.remove();

},2200);

},300);


// ==========================================
// CELEBRATION BUTTON EFFECT
// ==========================================

const celebrateBtn=document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

for(let i=0;i<5;i++){

setTimeout(()=>{

createConfetti();

fireworks();

},i*800);

}

});

}


// ==========================================
// AUTO WELCOME
// ==========================================

setTimeout(()=>{

const welcome=document.createElement("div");

welcome.innerHTML=`

<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
padding:30px 45px;
background:rgba(20,0,35,.92);
backdrop-filter:blur(18px);
border-radius:25px;
color:white;
text-align:center;
box-shadow:0 0 35px hotpink;
z-index:999999;
font-family:Poppins;
">

<h2 style="margin-bottom:15px;">
🎂 Welcome Ashlesha ❤️
</h2>

<p>
Enjoy your birthday surprise! 💖
</p>

</div>

`;

document.body.appendChild(welcome);

setTimeout(()=>{

welcome.remove();

},3500);

},3200);


// ==========================================
// PAGE END FIREWORKS
// ==========================================

const finalSection=document.querySelector(".final-section");

const finalObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

createConfetti();

fireworks();

}

});

});

if(finalSection){

finalObserver.observe(finalSection);

}


// ==========================================
// END OF FILE
// ==========================================

console.log("🎂 Birthday Website Loaded Successfully ❤️");