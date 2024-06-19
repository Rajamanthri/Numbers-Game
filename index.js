let count=0;

document.getElementById("decreaseBtn").onclick=function(){
    count-=1;
    document.getElementById("countlb").innerHTML=count;
}

document.getElementById("resetBtn").onclick=function(){
    count=0;
    document.getElementById("countlb").innerHTML=count;
}

document.getElementById("increaseBtn").onclick=function(){
    count+=1;
    document.getElementById("countlb").innerHTML=count;
}


let x;
let y;
let z;

document.getElementById("roll").onclick = function(){
    x=Math.floor(Math.random()*6)+1;
    y=Math.floor(Math.random()*6)+1;
    z=Math.floor(Math.random()*6)+1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

const answer = Math.floor(Math.random()*10 +1);
console.log(answer);
let guesses =0;

document.getElementById("submitbtn").onclick = function(){
    let guess = document.getElementById("guessbox").value ;
    
    guesses++;

    if(guess == answer){
        alert(`${answer} is the number. It took you ${guesses} guesses.`);
    }
    else if(guess<answer){
        alert("Too small!");
    }
    else{
        alert("Too large");
    }
}

document.getElementById("sub").onclick=function(){
let temp;

if(document.getElementById("cbtn").checked){
    temp = document.getElementById("temp").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("templbl").innerHTML= temp + "°C" ;
}
else if(document.getElementById("fbtn").checked){
    temp = document.getElementById("temp").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("templbl").innerHTML= temp + "°F" ;
}
else{
    document.getElementById("templbl").innerHTML="Select a unit";
}

function toCelsius(temp){
    return (temp - 32 )* (5/9);
}

function toFahrenheit(temp){
    return temp*9 /5 +32;
}
}


