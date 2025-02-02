let h1 = document.querySelector("h1");

 function changecolur(color,delay ,changecolurfun){
    setTimeout(()=>{
        h1.style.color = color;
        if(changecolurfun) changecolur();
    },delay);
 }

 changecolur(red,1000);