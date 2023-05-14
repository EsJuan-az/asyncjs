const promise = new Promise(function(resolve, reject){
    resolve("Todo bien!")
});

const cow = 15;

const countCows = new Promise(function(resolve, reject){
    if(cow < 10){
        reject("Nada ok")
    }else{
        resolve("Todo ok")
    }
})

countCows
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => {
        console.log("Se acabó la ejecución de la promesa")
    })