const x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
}



var input = document.querySelector('#input');
const button = document.querySelector('#input_button');
button.addEventListener('click', myfirstfunction);
let message1 = 'Rock is a solid which stronger that scissor in rock paper and scissor game.';
let message2 = 'Scissor is use to cut anything';
let message3 = 'paper use to write something on it';

function myfirstfunction() {
    if (input == 'Rock') {
        document.querySelector("#demo_1").textContent = message1;

    }
    if (input == "Scissor") {
        document.querySelector('#demo_1').textContent = message2;
    }
    if (input == 'Paper') {
        document.querySelector('#demo_1').textContent = message3;
    }
}