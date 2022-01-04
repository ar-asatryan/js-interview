// TODO: inst1
var counter = 0;
function inc() {
    counter++
    console.log(counter) ;
}

inc();
inc();

//console.log('TEST');
// TODO: 2
let incr = (function() {
    let count = 1;
    return function() {
        console.log(count++)
    }
})()

incr();
incr()
incr();

// TODO: 3