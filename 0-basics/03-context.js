// TODO: task
const obj = {
    a: 42,
    say: function() {
        setTimeout( function() {
            console.log(this.a)
        }, 1000);
    }
} // undefined

obj.say();

// TODO: case 1:
const obj1 = {
    a: 42,
    say: function() {
        setTimeout( () => {
            console.log(this.a)
        }, 1000);
    }
} // 42

obj1.say();

// TODO: case 2
const obj3 = {
    a: 42,
    say: function() {
        function runner(){
            console.log(this.a);
        }
        setTimeout(runner.bind(this), 1000);
    }
} // 42

obj3.say();


// TODO: task about bind()  

const func1 = (value, sum) => console.log(sum + value);
const func2 = func1.bind(null, 10);

func1(5,5); //10
func2(7, 12) //17

// TODO: task about call()  -  Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով,
//  նենց անել որ this-ը լինի վերևի object-ը:

const user = {
    name : "AroRay"
};

setTimeout(()=>{
    console.log(this)
},2000);

// FIXME: Solution>>

function reAssigner() {

    setTimeout(()=>{
        console.log('timer finished>>', this)
    },1000);
}

reAssigner.call(user); 

//TODO: 












