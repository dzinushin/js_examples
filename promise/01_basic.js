// trivial example for use Promise

const promise = new Promise( resolve => {
    setTimeout(() => resolve(42), 1000);
});

promise.then( r => console.log('promise result: ', r));

console.log('done');