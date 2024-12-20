let btn = document.querySelector("button");
let li = document.querySelector("li");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let valu = inp.value;
    let newlist = document.createElement("li");
    newlist.innerText = valu;
    ul.appendChild(newlist);



})
