let INFO_ID
setTimeout(async () => {
    let i = rand(5);
    while(i){
        i--;
        await new Promise(resolve => setTimeout(resolve, rand(800)));
    }
    setTimeout(()=>{
        document.querySelector("#bell").classList.add("active");
        addInfo("Vous pouvez cliquer sur la cloche !", true);
        document.querySelector("#bell").addEventListener("click",()=>{
            activeFog("Paul souhaite vous ajouter en amis !", "Ouai, il est super sympa lui 😁", "Euhhh, moyen chaud 😒", choix1, ()=>setTimeout(()=>window.location.replace("./page5.html"), 1500))
        }, {once:true})
    }, 3000)
}, rand(1500));

function choix1n2(){
    setTimeout(()=>{
        sendChat("On va faire une blague à Eric, ça te dit de venir avec nous ?", getHeure(), "paul");
        document.querySelector("#sendmessage").addEventListener("click", ()=>{
            activeFog("Que voulez-vous envoyer ?", "Quel genre de blague ?", "Vous allez faire quoi ?", ()=>{
                receiveChat("Quel genre de blague ?");
                choix1n3()
            }, ()=>{
                receiveChat("Vous allez faire quoi ?");
                choix1n3()
            });
        }, {once : true})
    }, 2300)
}
function choix1n3(){
    setTimeout(()=>{
        sendChat("Tu vois le chemin qu'il prends pour aller au lycée ? On a acheté des nains de jardin, et on va les disposer le long de la route. Après, il nous faudrait des gens parce que ça va devoir aller vite", getHeure(), "paul");
        document.querySelector("#sendmessage").addEventListener("click", ()=>{
            activeFog("Que voulez-vous envoyer ?", "Let's go, ça va être marrant", "Vous abusez, y'a pas moyen", ()=>{
                receiveChat("Let's go, ça va être marrant");
                setTimeout(()=>{
                    window.location.replace("./typing2.html");
                }, 1500)
            }, ()=>{
                receiveChat("Vous abusez, y'a pas moyen");
                setTimeout(()=>window.location.replace("./page5.html"), 1500)
            });
        }, {once : true})
    }, 2300)
}
function choix1(){
    createChat("paul", "Aujourd'hui");
    activeChat(setTimeout(()=>{
        sendChat("Hey, comment ça va bien ?", getHeure(), "paul");
        }, 2300));
    document.querySelector("#sendmessage").addEventListener("click", ()=>{
        activeFog("Que voulez-vous envoyer ?", "Super :)", "Bof...", ()=>{
            receiveChat("Super :)");
            choix1n2()
        }, ()=>{
            receiveChat("Bof...");
            choix1n2()
        });
    }, {once : true})
}