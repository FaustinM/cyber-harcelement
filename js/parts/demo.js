//TODO : Mettre en couleur les pseudos importans
let INFO_ID;
function choix1(){ //MP de Sara
    receiveChat("Merci beaucoup ❤️", getHeure());
    setTimeout(()=> sendChat("De rien 😇", getHeure(), "sara"), 800);
    setTimeout(desactiveChat, 4000);
    setTimeout(choix3, 2200);
    removeInfo();
}
function choix2(){ //MP de Sara
    receiveChat("PTDR TES KI ? COMME DIRAIS GUERDO : 'Je suis un non fumeur qui peut te passer à tabac'", getHeure());
    setTimeout(()=> sendChat("T'AS UN PROBLEME TU VEUX QU4ON SE TAPE !", getHeure(), "sara"), 800);
    setTimeout(choix3, 2200);
    setTimeout(desactiveChat, 4000);
    removeInfo();
}

function choix3(){ // Paul lance le truc
    addPosts("paul", "Hey @#pseudo ! Tu viens à la fête de @ju_fiter ? Ca va être dément 😏".replace("#pseudo", localStorage.pseudo), 13, 2, 6, getHeure(), ()=>{
        addInfo("Des fois, un like n'est pas utile, essayez de commenter pour plus d'intéraction 😉 !", true);
    });
    document.querySelectorAll("article.section")[0].querySelectorAll(".button")[1].addEventListener("click",()=>{
        activeFog("Voulez-vous aller à la fête de Julie", "Bien sur 👌 !", "Euh... Désolé j'ai un repas de famille 😅 ! HO-RI-BLE", choix4, choix5);
    },{once: true});
}
function choix4(){ //Réponse pour paul
    addPosts("me", "Bien sûr ! On voit ça au lycée 😉", 13, 2, 6, getHeure());
    console.log("DEBUG : choix4 call")
    genPost(rand(3000));
    gilet();
}
function choix5(){ //Réponse pour paul
    addPosts("me", "Moyen chaud, j'ai mes parents qui me gonflent...", 13, 2, 6, getHeure());
    console.log("DEBUG : choix5 call")
    genPost(rand(4000));
    gilet();
}
function gilet(){
    setTimeout(()=>{
        addPosts("eric", "Super sympa le gilet qu'on m'a offert pour mon anniv' :b ! Vous en pensez quoi ?", rand(9), rand(13), rand(11), getHeure(), ()=>{}, "./img/posts/gilet.jpg")
    }, 500);
    setTimeout(async ()=>{
        addInfo("Les posts en rouge sont important et font avancer l'histoire. Les liker ou les ignorer influencera le dénouement!", false)
        addPosts("paul", "@Erock Sympa, mais ta taille c'est toujours pas ça... Faut manger de la soupe 😉 !", rand(9), rand(13), rand(11), getHeure(),()=>{
            localStorage.setItem("position", "likeBlagueDebut");
        }, "",true);
        i = rand(48);
        while(i){
            document.querySelectorAll(".likes")[1].textContent = " " + (parseInt(document.querySelector(".likes").textContent.replace(" ","").replace("                ", "")) + 1)
            i--;
            await new Promise(resolve => setTimeout(resolve, rand(800)));
        }
    }, 4000);
    setTimeout(()=>{
        addPosts("julie", "@Erock bah on te vois pas tellement t ptit x)", rand(22), rand(8), rand(9), getHeure(), ()=>{
            localStorage.setItem("position", "likeBlagueDebut");
        }, "",true)
        genPost();
    }, 5000);
    setTimeout(()=>{
        addPosts("maude", "Super drole vos blagues avec Paul 😂😂😂", rand(22), rand(8), rand(9), getHeure(), ()=>{
            localStorage.setItem("position", "likeBlagueDebut");
        }, "",true)
    }, 8000);
    setTimeout(()=>{
        removeInfo();
        if(localStorage.position === "likeBlagueDebut"){
            window.location.replace("./typing1.html")
        } else {
            localStorage.setItem("position", "ignoreBlagueDebut");
            window.location.replace("./typing3.html")
        }
    }, 25000)
}

addPosts("sara", "Trop cool @#pseudo ! Tu as rejoints facebook !".replace("#pseudo", localStorage.pseudo), 26, 3, 22, getHeure(), ()=>{
    removeInfo();
    createChat("sara", "Aujourd'hui");
    sendChat("Pour pouvoir bien utiliser Facebook, il va falloir faire des choix pour avancer dans l'histoire !", getHeure(), "sara");
    activeChat(setTimeout(()=>{
        sendChat("Comme tu l'as vu je te parle car tu as liké mon post ^^", getHeure(), "sara");
        INFO_ID = setTimeout(()=> addInfo("Tu peux répondre aux messages !", false), 1200);
        }, 2300));

    document.querySelector("#sendmessage").addEventListener("click", ()=>{
        removeInfo();
        activeFog("Que voulez-vous envoyer ?", "Merci beaucoup ❤️", "PTDR T KI ?", choix1, choix2);
    }, {once : true})
}, "noMusic");
setTimeout(()=>addInfo("Vous pouvez réagir aux posts en likant !", false),2000);