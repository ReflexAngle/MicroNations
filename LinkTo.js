function redirect(){
    const clickInput = document.getElementById("goAbout")

    if(clickInput.onclick){
        window.location.assign("AboutTheSite.html")
    }
}
redirect()
