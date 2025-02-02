// let h1 = document.querySelector("h1");

//  function changecolur(color,delay ,changecolurfun){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(changecolurfun) changecolurfun();
//     },delay);
//  }

//  changecolur("red",1000, ()=>{
//     changecolur("green",1000,()=>{
//         changecolur("yellow",1000);
//     })
//  });



function saveDb(data,success,failure){
    let internet  = Math.floor(Math.random()*10 )+ 1;
    console.log(internet);

    if(internet>4){
        success();
    }else{
        failure();
    }

};

saveDb("Raju kumar",()=>{
    console.log(" success :Data is saved");
    saveDb("village: parasdih",()=>{
        console.log("success2 : dat2 is saved");

    },()=>{
        console.log("faliure2,week conection");
    });
},()=>{
    console.log("failure : week connection ");
});

