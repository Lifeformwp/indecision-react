const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Serhii',
        //     age: 23
        // });
        reject('here is an error');
    }, 3000);
});

console.log('waiting');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});

console.log('ended');