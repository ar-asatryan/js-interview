// TODO:
function foo() {
  console.log(name);
  console.log(age);
  var name = "Davit";
  let age = 21;
}

foo();

// TODO: // not worked in Console !
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);

// TODO:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// TODO:
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

// TODO:
const arr = [NaN, 4, 6, 9];
console.log(arr.indexOf(4));
console.log(arr.indexOf(NaN)) 


// TODO:
const name = 'Dav!';
  (function () {
  if (typeof name === 'undefined') {
      var name = 'John';
      console.log('Goodbye ' + name);
  } else {
      console.log('Hello ' + name);
  }
})();

// TODO:
const arr = [1, 2, 3, 10, 11, 21];
arr.sort();
console.log(arr)

// TODO:
 const obj = {
     userName: 'Admin'
 }
 const obj1 = Object.create(obj);
 delete obj1.userName;
 console.log(obj1)
 console.log(obj1.userName);

 //TODO:
console.log( [1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
}) );

// TODO:
function getInfo(member, year) {
  member.name = 'Davit';
  year = '2000';
}

const person = { name: "John" };
const birthYear = '1999';

getInfo(person, birthYear);
console.log(person, birthYear);

// TODO:
const name = "Davit";
age = 21;

console.log(delete name);
console.log(delete age);

// TODO:
const user = { name: "Davit", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

// TODO:
const arr = [1, 2, 3, 4, 5];

const result = arr.forEach((item, index, arr) => {
   return item + 1
});

console.log(result)

// TODO:
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// TODO:
switch(1) {
  case 2 : console.log(2); break;
  default: console.log(3);
  case 4: console.log(4)
}

// TODO:
function foo() {
    console.log(this)
}

function goo() {
    return arguments[0]()
}   

goo(foo);

// TODO:
const obj1 = {
    x: 10
}
const obj2 = obj1;
obj1.x = 20;
console.log(obj2.x)

// TODO:// not worked in Console !
var x = 22;

const obj = {
x: 55,
    bar: {
        x: 6,
        baz: function() {
            return this.x;
        }
    }
}
const foo = obj.bar.baz;

console.log(foo());
console.log(obj.bar.baz());

// TODO:
const foo = (baz = 9) => {
    var baz = 'HAPPY!';

    function bar() {
        return 'HAPPY!' 
    }

    function baz() {
        return 'HAPPY!'
    }
    var bar = 8
    return [typeof baz, typeof bar]

}
console.log(foo());

// TODO:
var x = 10
const obj = {
    x: 20,
    foo: function() {
        setTimeout(function() {
            console.log(this.x)
        }, 0)
    }
}
obj.foo()

// TODO:
console.log([] === []);

// TODO:
function foo() {
      return arguments.map(item => {
          return item + 10
      }) 
}
foo(10, 10, 50, 20)


// TODO:
const obj1 = {
    baz:'Hi!',
    arr: [2, 5, 7, 8]
}
const obj2 = {...obj1};
obj1.baz = 'Hello',
obj1.arr.push(20, 59);

console.log(obj2.baz, obj2.arr);

// TODO:
var x = 10
    const obj = {
    x: 20,
    foo: function() {
        setTimeout(() => {
            console.log(this.x)
        }, 0)
    }
}
obj.foo()

// TODO:
const foo = () => {
    let i = 0; 
    return () => {
        return i++
    }
}

const baz = foo();
console.log(baz(), 'baz');
console.log(baz(), 'baz');
console.log(baz(), 'baz');

const bar = foo();
console.log(bar(), 'bar');
console.log(bar(), 'bar');
console.log(baz(), 'baz');

// TODO:
let name = "lololoshka".replace("l", "d");
console.log(name)

// TODO: