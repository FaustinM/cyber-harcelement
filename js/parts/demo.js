function choix1(){
    receiveChat("Merci beaucoup ❤️", getHeure());
}
function choix2(){
    receiveChat("PTDR TES KI ? COMME DIRAIS GUERDO : 'Je suis un non fumeur qui peut te passer à tabac'", getHeure());
}
addPosts("sara", "Trop cool @#pseudo ! Tu as rejoints facebook !".replace("#pseudo", localStorage.pseudo), 26, 3, 22, getHeure(), ()=>{
    createChat("sara", "Aujourd'hui");
    sendChat("Pour pouvoir bien utiliser Facebook, il va falloir faire des choix pour avancer dans l'histoire !", getHeure(), "sara");
    activeChat(setTimeout(()=>{
        sendChat("Comme tu l'as je te parle car tu as liké mon post ^^", getHeure(), "sara");
        setTimeout(()=> Toast.fire({type: 'info',title: 'Vous pouvez envoyer un message !'}), 700);
        }, 2300));

    document.querySelector("#sendmessage").addEventListener("click", ()=>{
        activeFog("Que voulez-vous envoyer ?", "Merci beaucoup ❤️", "PTDR T KI ?", choix1, choix2);
    }, true)
});
Toast.fire({type: 'info',title: 'Vous pouvez réagir à un post en likant par exemple !'}