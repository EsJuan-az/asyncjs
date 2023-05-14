const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(resolve, 2000, "Async!!")
               : reject(new Error("Error!"));
    });
};

const doSomething = async() => {
    const algo = await fnAsync();
    console.log(algo);
};
console.log("Before");
doSomething();
console.log("After");