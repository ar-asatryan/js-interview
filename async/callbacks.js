
const posts = [
    {title: "post 1>>>>>", body: 'This is post One'},
    {title: 'post 2>>>>>>', body: 'This is post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach( (post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}


//getPosts();

function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback()
    }, 2000)
}

createPost({title: 'post 3>>>>>', body: 'This is post Three'}, getPosts)

