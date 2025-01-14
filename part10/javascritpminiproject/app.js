let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    // create a list element
    if (inp.value != "") {
        let item = document.createElement("li");
        item.innerText = inp.value;


         // delet btn
    let delbtn = document.createElement("button");
    delbtn.innerHTML = "delet";
    delbtn.classList.add("deletbtn");

    // add in item
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";

    } else {
        console.log("don't add task becaue not write waht's dot ")
   }





});

ul.addEventListener("click",function (event) {
    console.log(event.target.nodeName);
    if (event.target.nodeName == "BUTTON") {
        let deltitme = event.target.parentElement;
        deltitme.remove();
    } else {
        console.log("don't delet element");
    }
})


// delet btn function
// let btnall = document.querySelectorAll(".deletbtn");
// for (deletbtn of btnall) {
//     deletbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }
