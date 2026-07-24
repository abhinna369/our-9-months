const message =
`9 months...

9 months of smiles...
9 months of memories...
9 months of choosing each other...

No matter what happens...

I'll always be beside uuu.

Whenever uuu smile...
I'll smile with uuu.

Whenever uuu cry...
I'll hold uuu tighter.

Everything is gonna be alright.

Happy 9 Beautiful Months,
Meriii Chuiimuii ❤️🌻`;

const typing=document.getElementById("typing");

let i=0;

function typeWriter(){
if(i<message.length){
typing.innerHTML+=message.charAt(i);
i++;
setTimeout(typeWriter,45);
}
}

typeWriter();

/* Falling Petals */

const petals=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.fontSize=(18+Math.random()*18)+"px";

petals.appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

setInterval(createPetal,300);

/* Floating Hearts */

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(18+Math.random()*20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,700);

/* Sparkles */

const sparkles=document.getElementById("sparkles");

for(let i=0;i<60;i++){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*2+"s";

sparkles.appendChild(s);

}

/* Hug Button */

document.getElementById("hugBtn").addEventListener("click",()=>{

for(let i=0;i<80;i++){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=(45+Math.random()*10)+"vw";

h.style.bottom="45vh";

h.style.animationDuration="3s";

document.body.appendChild(h);

setTimeout(()=>{
h.remove();
},3000);

}

alert("Sending the biggest hug in the universe to Meriii Chuiimuii 🤍🌻❤️");

});

/* Background Music */

document.body.addEventListener("click",()=>{

const music=document.getElementById("bgMusic");

music.play().catch(()=>{});

},{once:true});
/* Love Timer */

const startDate = new Date("2025-10-25T22:09:00+05:30");

const loveTimer = document.getElementById("loveTimer");

function updateLoveTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

const seconds = Math.floor((diff%(1000*60))/1000);

loveTimer.innerHTML =
`${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);
/* Gift Opening */

const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");
const mainContent = document.getElementById("mainContent");

giftBox.addEventListener("click", () => {

    giftBox.style.transform = "scale(1.3) rotate(15deg)";
    giftBox.innerHTML = "💖";

    setTimeout(() => {

        giftScreen.style.opacity = "0";

        setTimeout(() => {
            giftScreen.style.display = "none";
            mainContent.style.display = "flex";

            for(let i=0;i<150;i++){
                createPetal();
            }

            const music=document.getElementById("bgMusic");
            if(music){
                music.play().catch(()=>{});
            }

        },1000);

    },700);

});
document.getElementById("loveBtn").addEventListener("click",()=>{

for(let i=0;i<300;i++){
createHeart();
createPetal();
}

alert("No matter where life takes us...\n\nMy heart will always find its way back to uuu. ❤️🌻");

});
/* Stars */

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}
/* Clouds */

const clouds=document.getElementById("clouds");

function createCloud(){

const cloud=document.createElement("div");

cloud.className="cloud";

const size=80+Math.random()*120;

cloud.style.width=size+"px";
cloud.style.height=size*0.45+"px";

cloud.style.top=Math.random()*35+"vh";

cloud.style.animationDuration=(35+Math.random()*30)+"s";

clouds.appendChild(cloud);

setTimeout(()=>{
cloud.remove();
},70000);

}

for(let i=0;i<6;i++){
setTimeout(createCloud,i*2000);
}

setInterval(createCloud,10000);
/* Fireflies */

const fireflies=document.getElementById("fireflies");

function createFirefly(){

const firefly=document.createElement("div");

firefly.className="firefly";

firefly.style.left=Math.random()*100+"vw";
firefly.style.top=Math.random()*100+"vh";

firefly.style.setProperty("--x",(Math.random()*300-150)+"px");
firefly.style.setProperty("--y",(Math.random()*300-150)+"px");

firefly.style.animationDuration=(4+Math.random()*4)+"s";

fireflies.appendChild(firefly);

setTimeout(()=>{
firefly.remove();
},8000);

}

setInterval(createFirefly,250);
