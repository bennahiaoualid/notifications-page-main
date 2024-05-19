let listNotification = document.querySelectorAll("li");

listNotification.forEach(element => {
  /*   element.addEventListener("click",event=>{
        event.currentTarget.classList.toggle("extended");
        event.currentTarget.classList.add("read");
    }) */
    element.onclick = function(){
        element.classList.toggle("extended");
        element.classList.add("read");
    }
});
let markAllRead = document.getElementById("mark-all-read");
markAllRead.addEventListener("click",event=>{
    listNotification.forEach(element => {
        element.classList.add("read");
    });
});