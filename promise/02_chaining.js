// example of promise then chaining
let promise = new Promise( (resolve, reject) => {
    resolve(100);
});

promise
    .then( r => r*2 )
    .then(r1 => console.log('r1: ', r1))
    .then(r2 => {
        console.log('r2: ', r2); 
        return new Promise( resolve => {
            resolve(42);
        });
    })
    .then(r3 => {
        console.log('r3: ', r3);
        throw new Error('some shit happened');
    })
    .catch(e => {
        console.log('exception: ', e.message);
        return 666;
    })
    .then(r4 => {
        console.log('after catch r4: ', r4);
    });