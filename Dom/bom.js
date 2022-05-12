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
    span.innerHTML = " <a href = '#'>[X]</a>";
    span.addEventListener("click", function() {
        let li = span.parentNode;
        li.parentNode.removeChild(li);
    });
    li.appendChild(span);


    let items = document.getElementById("items");
    items.appendChild(li);

    document.getElementById("newText").value = "";
}