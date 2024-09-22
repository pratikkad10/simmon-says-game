let gameSeq=[];
let userSeq=[];
let level=0;
let Started=false;

let btns=['c1','c2','c3'];

let h3=document.querySelector('h3');
document.addEventListener('keypress', function() {
    if(Started==false){
        console.log('game started');
        Started=true;
        levelUp();
    }
     
});
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random() * 3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        // console.log('same value');
        if(userSeq.length == gameSeq.length){
            
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML=`Game over! <b>Your score was ${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        }, 150)
        reset();
    }
}

function reset(){
    Started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}

function btnpress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.box');

for(btn of allBtns){
    btn.addEventListener('click', btnpress)
}