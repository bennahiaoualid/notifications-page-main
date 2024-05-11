let listNotification = document.querySelectorAll("li");

listNotification.forEach(element => {
    element.addEventListener("click",event=>{
        event.currentTarget.classList.toggle("extended");
    })
});