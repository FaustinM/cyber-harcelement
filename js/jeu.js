//Mettre un jour les pseudo avec la classe js-pseudo
function updatePseudo(){
    let pseudos = document.getElementsByClassName("js-Pseudo");
    for(let i = 0; i < pseudos.length; i++)
    {
        pseudos[i].textContent = localStorage.pseudo;
    }
}

//Ajouter un post
function addPosts(pseudo, contenu, like, commentaires, partage, date, handler) {
    let m = document.querySelector("#t-Post");
    let mDiv = document.querySelector(".publications");
    let clone = document.importNode(m.content, true);
    if(people[pseudo]){
        if(people[pseudo].face) clone.querySelector(".js-picture").src = people[pseudo].face;
        clone.querySelector(".author").textContent = people[pseudo].name;
    } else {
        clone.querySelector(".author").textContent = pseudo;
    }
    clone.querySelector(".date").textContent = date;
    clone.querySelector(".content").textContent = contenu;
    clone.querySelector(".counter").textContent = commentaires +" Commentaires "+ partage +" Partages";
    clone.querySelector(".likes").textContent = " " + like;
    clone.querySelector(".js-like").addEventListener("click", (e) => {
            e.preventDefault();
            const text = e.originalTarget.parentNode.parentNode.parentNode.querySelector(".likes").textContent;
            if(e.originalTarget.classList.contains("like")){
                e.originalTarget.classList.toggle("like");
                e.originalTarget.parentNode.parentNode.parentNode.querySelector(".likes").textContent = " " + (parseInt(text.replace(" ","").replace("                ", "")) - 1);
            } else {
                e.originalTarget.classList.toggle("like");
                e.originalTarget.parentNode.parentNode.parentNode.querySelector(".likes").textContent = " " + (parseInt(text.replace(" ","").replace("                ", "")) + 1);
            }
        });
    clone.querySelector(".js-like").addEventListener("click", handler, true);
    mDiv.appendChild(clone);
    mDiv.scrollIntoView(false);
    setTimeout(update,500)
}

// Eviter la dislocation
function dislocation() {
    document.querySelector("*").addEventListener("dragstart", function (e) { e.preventDefault(); });
}

//Mettre à jour les éléments dynamique (non opti)
function update() {
    if(document.querySelector(".publications").childElementCount === 0){
    } else {
        twemoji.parse(document.body);
        updatePseudo();
        dislocation();
    }
}

// Ouvrir et fermer le chat
document.getElementById("chat").addEventListener("click", (e)=>{
    e.preventDefault();
    if(document.getElementById("chatBox").classList.contains("hide")){
        openChat();
    } else if(!document.getElementById("chatBox").classList.contains("hide")) {
        closeChat();
    }
});

// Activer le nuage bloquant
function activeFog(quest,oui,non,handler1,handler2){
    document.querySelector("#modal-yes").textContent = oui;
    document.querySelector("#modal-yes").addEventListener("click", handler1, true);
    document.querySelector("#modal-yes").addEventListener("click", ()=>{document.querySelector(".black-fog").classList.remove("active")}, true);
    document.querySelector("#modal-no").textContent = non;
    document.querySelector("#modal-no").addEventListener("click", handler2, true);
    document.querySelector("#modal-no").addEventListener("click", ()=>{document.querySelector(".black-fog").classList.remove("active")}, true);
    document.querySelector(".message-PopUp").textContent = quest;
    twemoji.parse(document.body);
    document.querySelector(".black-fog").classList.add("active");
}

// Avoir l'heure
function getHeure(){
    let currentdate = new Date;
    return (currentdate.getHours() + ":" + currentdate.getMinutes()).toString();
}

// Regler SW2

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})