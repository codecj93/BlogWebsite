const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submitButton');
const form =  document.querySelector('form');
let blogArray = JSON.parse(localStorage.getItem('blogArray'))



form.addEventListener('submit', function(event) {
    event.preventDefault ();

   const blogPost = {
       username: username.value,
       title: title.value,
      content: content.value,
   };
   blogArray.push(blogPost)
  
   localStorage.setItem('blogArray', JSON.stringify(blogArray));

   if (blogPost.username === null || blogPost.title === null || blogPost.content === null) {   
      window.alert("Please complete form!");
  } else {
    window.location.href="blog.html"   
  };
});




