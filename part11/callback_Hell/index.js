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



// function saveDb(data,success,failure){
//     let internet  = Math.floor(Math.random()*10 )+ 1;
//     console.log(internet);

//     if(internet>4){
//         success();
//     }else{
//         failure();
//     }

// };

// saveDb("Raju kumar",()=>{
//     console.log(" success :Data is saved");
//     saveDb("village: parasdih",()=>{
//         console.log("success2 : dat2 is saved");

//     },()=>{
//         console.log("faliure2,week conection");
//     });
// },()=>{
//     console.log("failure : week connection ");
// });



function saved(data){
    return new Promise((resolve,reject)=>{
        let internet = Math.floor(Math.random()*10)+1;

         if (internet>4){
            resolve("data was saved");
         }else{
            reject("data was not saved slow internet connestion");
         }
        });
}

//   let request = saved("hi raju ");
//   request.then(()=>{
//     console.log("success : data was saved");
//   }).catch(()=>{
//     console.log("failure : week connection");
//   })

// saved("hi raju").then(()=>{
//     console.log("success : data was saved");
// }).catch(()=>{
//     console.log("failure : week connection");
// })

                // Improve  version of then & catch 
        saved("hello world")
        .then(()=>{
            console.log("data1 saved");
            return saved("hello raju");
        })
        .then(()=>{
            console.log("data2 was saved");
            return saved("village parasdih");
        })
        .then(()=>{
            console.log("data3 saved");
        })
        .catch("error : week connection ");
