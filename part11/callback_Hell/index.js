let h1 = document.querySelector("h1");

 function changecolur(color,delay ,changecolurfun){
    setTimeout(()=>{
        h1.style.color = color;
        if(changecolurfun) changecolurfun();
    },delay);
 }

 changecolur("red",1000, ()=>{
    changecolur("green",1000,()=>{
        changecolur("yellow",1000);
    })
 });