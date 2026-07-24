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
