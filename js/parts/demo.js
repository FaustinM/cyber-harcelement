function choix1(){
    receiveChat("Merci beaucoup ❤️", getHeure());
    setTimeout(()=> sendChat("De rien 😇", getHeure(), "sara"), 800);
}
function choix2(){
    receiveChat("PTDR TES KI ? COMME DIRAIS GUERDO : 'Je suis un non fumeur qui peut te passer à tabac'", getHeure());
    setTimeout(()=> sendChat("T'AS UN PROBLEME TU VEUX QU4ON SE TAPE !", getHeure(), "sara"), 800);
}
addPosts("sara", "Trop cool @#pseudo ! Tu as rejoints facebook !".replace("#pseudo", localStorage.pseudo), 26, 3, 22, getHeure(), ()=>{
    createChat("sara", "Aujourd'hui");
    sendChat("Pour pouvoir bien utiliser Facebook, il va falloir faire des choix pour avancer dans l'histoire !", getHeure(), "sara");
    activeChat(setTimeout(()=>{
        sendChat("Comme tu l'as vu je te parle car tu as liké mon post ^^", getHeure(), "sara");
        setTimeout(()=> addInfo("Tu peux répondre aux messages !"), 1200);
        }, 2300));

    document.querySelector("#sendmessage").addEventListener("click", ()=>{
        activeFog("Que voulez-vous envoyer ?", "Merci beaucoup ❤️", "PTDR T KI ?", choix1, choix2);
    }, {once : true})
});
setTimeout(()=>addInfo("Vous pouvez réagir aux posts en likant !"),2000);