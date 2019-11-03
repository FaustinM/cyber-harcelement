let INFO_ID
setTimeout(async () => {
    let i = rand(5);
    while(i){
        genPost()
        i--;
        await new Promise(resolve => setTimeout(resolve, rand(800)));
    }
    setTimeout(()=>{
        document.querySelector("#bell").classList.add("active");
        addInfo("Vous pouvez cliquer sur la cloche !", true);
        document.querySelector("#bell").addEventListener("click",()=>{
            activeFog("Paul souhaite vous ajouter en amis !", "Ouai, il est super sympa lui 😁", "Euhhh, moyen chaud 😒", choix1, choix2)
        })
    }, 3000)
}, rand(1500));

function choix2(){
    addPost("me","WIP", 0,0,0, getHeure());
}
function choix1(){
    createChat("paul", "Aujourd'hui");
    activeChat(setTimeout(()=>{
        sendChat("Hey, tu veux faire une blague ;) ?", getHeure(), "paul");
        }, 2300));
    document.querySelector("#sendmessage").addEventListener("click", ()=>{
        activeFog("Que voulez-vous envoyer ?", "Trop cool", "Non", ()=>{
            receiveChat("Ouai pourquoi pas !")
            setTimeout(()=>{
                window.location.replace("./typing2.html");
            }, 1500)
        }, ()=>{
            receiveChat("WIP");
        });
    }, {once : true})
}