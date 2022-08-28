function LoadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(Data => findData(Data))
}
function findData(Data) {
    const postContainer = document.getElementById('post-container')

    for (const post of Data) {

        const div = document.createElement('div');

        div.classList = 'post' //Css Style add korlam 

        div.innerHTML = `
        <h4>User- ${post.userId} </h4>
        <h5>Post Title -${post.title}</h5>
        <p>Body - ${post.body}  </p>
    
        `;
        postContainer.appendChild(div);
    }
}
LoadPost()