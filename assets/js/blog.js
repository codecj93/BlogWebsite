const toggle = document.getElementById('lightdark')
const back = document.getElementsByClassName("backbutton")
let currentMode = "light"
let blogArray = JSON.parse(localStorage.getItem('blogArray'))



if back.addEventListener('click', function(event)) {
    window.location.href='index.html'
}

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
  

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = blogArray[i].title;
    cardDiv.append(titleH1)


   

    document.getElementById("blog-container").append(cardDiv)

}


if back.addEventListener('click')
    window.location.href='index.html'
