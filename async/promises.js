//TODO:
const promise1 = Promise.resolve("Greetings!!");
const promise2 = Promise.resolve(25);
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, "It's Enough !!")
);

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json());

const promises = [promise1, promise2, promise3, promise4];

Promise.all(promises).then( values => console.log(values) );

const posts = [
    {title: 'post N1', body: 'That is the Post one'},
    {title: 'post N2', body: 'That is the Post two'}
];

function getPosts () {
    setTimeout(() => {
        let output = '';
        posts.forEach( (post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 2000);
}

function createPost(post) {
    const pr = new Promise( (resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error){
                resolve()
            }
            else {
                reject("Error message...")
            }
        }, 2000);
    })

    return pr;
}


createPost({title: 'post N3', body: 'That is Post three'})
.then(getPosts)
.catch(error => console.log(error));