setTimeout(()=> {document.getElementById("loginForm").classList += " show";document.getElementById("iPseudo").focus()}, 16000);

function setPseudo() {
    pseudo = document.forms[0].elements[0].value;
    if(!pseudo || pseudo === " "){
        document.forms[0].elements[0].value = ""
        return false
    }
    localStorage.setItem('pseudo', pseudo);
    window.location.href = window.location.origin + "index.html";
}
