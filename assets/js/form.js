const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submitButton');
const form = document.querySelector('form');


const blogPost = {
    username: username.textContent,
    title: title.textContent,
    content: content.textContent,
};

submitButton.addEventListener('submit', function(event) {
    event.preventDefault ();

localStorage.setItem('blogPost', JSON.stringify(blogPost));
});


    


  

