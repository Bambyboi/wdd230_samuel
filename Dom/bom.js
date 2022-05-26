/*const element = document.getElementById("submit");
element.addEventListener("click", myFunction);

function myFunction() {
    let input = document.getElementById("favchap")
    document.getElementById("list").innerHTML += input;
}*/

function addItem() {
    let text = document.getElementById("newText").value;
    let li = document.createElement("li");
    li.textContent = text;

    let span = document.createElement("span");
    span.innerHTML = " <a href = '#'>❌</a>";
    span.addEventListener("click", function() {
        let li = span.parentNode;
        li.parentNode.removeChild(li);
    });
    li.appendChild(span);


    let items = document.getElementById("items");
    items.appendChild(li);

    document.getElementById("newText").value = "";
}

let sum = 0;
const number = [56, 477, 222, 4];
number.forEach(myfuction);

document.getElementById("array").innerHTML = sum;

function myfuction(item) {
    sum += item;
}


function verify() {
    const value = document.getElementById("guessed").value;
    const getRandom = Math.floor((Math.random() * 10 + 1));
    const p = document.createElement("p");
    if (value == getRandom) {
        p.innerHTML = "you have successfully";
    } else {
        p.innerHTML = "you haven't guess it right";
    }
    document.body.append(p);
}
/*function multiplication() {
    let array = [];
    let i = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ];
    const input = document.getElementById("input").value;
    const results = i.map((item) >= item * input);
    document.getElementById("array").appendChild(results);
    console.log(results);
    button = document.getElementById("click")
    button.addEventListener("click", multiplication);
}*/

/*function multiplication() {
    const inputValue = document.getElementById("input").value;
    for (let i = 1; i <= 13; i++) {
        console.log(inputValue * i);
    }
}*/
/*function multiplication() {

    const input = document.getElementById("input").value;
    for (let i = 1; i < 6; ++i) {
        results = console.log(i)
    }
    document.getElementById("array").appendChild(results);

    button = document.getElementById("click");
    button.addEventListener("click", multiplication());
}*/

/*function times() {
    const input = document.getElementById("input").value;
    
    for (let i = 1; i < 14; ++i) {
        const multiply = i * input;
    }
    let arr = document.getElementById("multiply");
    arr.appendChild(i)
}*/

/*function time() {
    var total = 1;
    for (var i = 0; i < array.length; i++) {
        total = total * array[i];

    }
    return 'Total' + total;

}
document.write(multiply([10, 16, 5]));*/

/*function multiplication() {
    let array = [];
    let i = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ];
    const input = document.getElementById("input").value;
    i.forEach(myfunction);
    const results = myfunction * input;
    document.getElementById("array").innerHTML = i;
    button = document.getElementById("click")
    button.addEventListener("click", multiplication);
}*/