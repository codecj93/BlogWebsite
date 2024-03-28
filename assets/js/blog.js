const toggle = document.getElementById('lightdark')
let currentMode = "light"



toggle.addEventListener('click', function () {
    console.log(currentMode)
    if (currentMode == 'light'){
        document.querySelector('body').classList.add('dark-mode');  
        document.querySelector('body').classList.remove('light-mode');
        
        currentMode = "dark";
    }
    else if (currentMode == 'dark'){
        document.querySelector('body').classList.add('light-mode');
        document.querySelector('body').classList.remove('dark-mode');
        
        currentMode = "light";
    }
})

const blogArray = JSON.parse(localStorage.getItem('blogArray'))

for(i = 0; i < blogArray.length; i++) {
    // create a card for each blog
    // <div class="card">
    //     <h1>Title</h1>
    //     <p>Content</p>
    //     <p>Author</p>
    // </div>

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = blogArray[i].title;
    cardDiv.append(titleH1)

    // content

    // author

    document.getElementById("blog-container").append(cardDiv)

}