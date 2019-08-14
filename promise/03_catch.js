
let promise = new Promise( (resolve, reject) => {
    reject( new Error('shit happened'));
})

promise
    .then( r => {
        console.log("resolved ", r);
    })
    .finally( () => {
        console.log('and final cleanup here');
    })
    .catch( e => {
        console.log("rejected ", e.message);
    })