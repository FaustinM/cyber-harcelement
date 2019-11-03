//Mettre un jour les pseudo avec la classe js-pseudo
function updatePseudo(){
    let pseudos = document.getElementsByClassName("js-Pseudo");
    for(let i = 0; i < pseudos.length; i++)
    {
        pseudos[i].textContent = localStorage.pseudo;
    }
}

//Ajouter un post
function addPosts(pseudo, contenu, like, commentaires, partage, date, handler, src) {
    let m = document.querySelector("#t-Post");
    let mDiv = document.querySelector(".publications");
    let clone = document.importNode(m.content, true);
    if(people[pseudo]){
        if(people[pseudo].face) clone.querySelector(".js-picture").src = people[pseudo].face;
        clone.querySelector(".author").textContent = people[pseudo].name;
        clone.querySelector(".author").title = people[pseudo].chatSubtitle;
    } else {
        clone.querySelector(".author").textContent = pseudo;
    }
    clone.querySelector(".date").textContent = date;
    clone.querySelector(".content p").textContent = contenu;
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
    clone.querySelector(".js-like").addEventListener("click", handler, {once : true});
    if(src && src !== "noMusic"){
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("post-image")
        clone.querySelector(".main-section").append(img)
    }
    mDiv.prepend(clone);
    mDiv.scrollIntoView(false);
    if(src !== "noMusic") new Audio('./img/post.ogg').play();
    setTimeout(update,500);
    scrollTo(0,0)
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
//Genere un nombre entre 1 et 100
function rand(max = 100) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Activer le nuage bloquant
function activeFog(quest,oui,non,handler1,handler2){
    document.querySelector("#modal-yes").textContent = oui;
    document.querySelector("#modal-yes").addEventListener("click", handler1, {once : true});
    document.querySelector("#modal-yes").addEventListener("click", ()=>{
        document.querySelector(".black-fog").classList.remove("active");
        let el = document.getElementById('modal-no'),
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
    }, {once : true});
    document.querySelector("#modal-no").textContent = non;
    document.querySelector("#modal-no").addEventListener("click", handler2, {once : true});
    document.querySelector("#modal-no").addEventListener("click", ()=>{
        document.querySelector(".black-fog").classList.remove("active");
        let el = document.getElementById('modal-yes'),
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
    }, {once : true});    document.querySelector(".message-PopUp").textContent = quest;
    twemoji.parse(document.body);
    document.querySelector(".black-fog").classList.add("active");
}

// Avoir l'heure
function getHeure(){
    let currentdate = new Date;
    return (currentdate.getHours() + ":" + currentdate.getMinutes()).toString();
}

// Function pour crée une info

function addInfo(message, bool=true){
    if(INFO_ID) INFO_ID = undefined;
    document.querySelector("#info").classList.add("active");
    document.querySelector("#info p").textContent = message;
    if(bool) setTimeout(()=>document.querySelector("#info").classList.remove("active"), 5000)
}
function removeInfo(){
    if(INFO_ID) clearTimeout(INFO_ID);
    document.querySelector("#info").classList.remove("active");
}

// Generer un post aléatoire
function genPost(time){
    if(!time){
        time = 0;
        while(time < 1000){
            time = rand(5000)
        }
    }
    setTimeout(()=>{
        let peoples = Object.values(people)
        peoples.pop();
        const num = rand(peoples.length);
        const authorName = peoples[num].name;
        let KEY;
        for(let key in people){
            if(authorName===people[key].name) KEY = key;
        }
        const contenu = randomContenu[rand(randomContenu.length)];

        addPosts(KEY, contenu.text, rand(), rand(), rand(), getHeure(), ()=>{}, contenu.image)
    }, time)
}