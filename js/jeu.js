// -- Old Part --

// prevent img deslocation bug



function updatePseudo(){
    let pseudos = document.getElementsByClassName("js-Pseudo");
    for(let i = 0; i < pseudos.length; i++)
    {
        pseudos[i].textContent = localStorage.pseudo;
    }
}
function updateLike(){
    let likes = document.getElementsByClassName("js-like");
    for(let i = 0; i < likes.length; i++)
    {
        likes[i].addEventListener("click", (e) => {
            e.preventDefault();
            const text = e.originalTarget.parentNode.parentNode.parentNode.querySelector(".likes").textContent;
            if(e.originalTarget.classList.contains("like")){
                e.originalTarget.classList.toggle("like");
                e.originalTarget.parentNode.parentNode.parentNode.querySelector(".likes").textContent = " " + (parseInt(text.replace(" ","").replace("                ", "")) - 1);
            } else {
                e.originalTarget.classList.toggle("like");
                e.originalTarget.parentNode.parentNode.parentNode.querySelector(".likes").textContent = " " + (parseInt(text.replace(" ","").replace("                ", "")) + 1);
            }
        })
    }
}
function addPosts(pseudo, contenu, like, commentaires, partage, date) {
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
    mDiv.appendChild(clone);
    mDiv.scrollIntoView(false);
    setTimeout(update,500)
}
function dislocation() {
    document.querySelector("*").addEventListener("dragstart", function (e) { e.preventDefault(); });
}
function update() {
    if(document.querySelector(".publications").childElementCount === 0){
    } else {
        updatePseudo();
        updateLike();
        dislocation();
    }
}

addPosts("sara", "T'es vraiment sympa ;)", 4, 4, 8, "Il y a dix minutes");
setTimeout(() => document.getElementById("bell").classList += " active", 5000);
setTimeout(() => document.getElementById("chat").classList.toggle("hide"), 1000);

document.getElementById("chat").addEventListener("click", (e)=>{
    e.preventDefault();
    if(document.getElementById("chatBox").classList.contains("hide")){
        document.getElementById("chatBox").classList.toggle("hide");
    } else {
        closeChat();
    }
});
