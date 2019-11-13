let INFO_ID
genPost(0);
async function start(){
    let i = rand(3);
    while(i){
        genPost(phraseRelou)
        i--;
        await new Promise(resolve => setTimeout(resolve, rand(800)));
    }
}
function friends(){
    start()
    setTimeout(() => {
        document.querySelector("#bell").classList.add("active");
        addInfo("Vous pouvez cliquer sur la cloche !", false);
        document.querySelector("#bell").addEventListener("click",()=>{
            removeInfo()
            activeFog("Eric souhaite vous ajouter en amis !", "Ouai, il est super sympa lui 😁", "Euhhh, moyen chaud 😒", choix1, choix2);
        });
    }, rand(1500));
}
/*async function groupe(){
    addPosts("eric", "@paulvrz Vos blagues sont pas marantes à la longues...", rand(9), rand(13), rand(11), getHeure());
    addPosts("paul", "@Erock On fait que rire dude calm down x)...", rand(9), rand(13), rand(11), getHeure());
    setTimeout(start, 4000);
}*/

function choix2(){
    setTimeout(()=>window.location.replace("./page5.html"), 1500)
}
function choix1n2(){
    setTimeout(()=>{
        sendChat("Ca commence à être fatiguant les blagues de Paul, j'arrive plus à penser à autre chose...", getHeure(), "eric");
        document.querySelector("#sendmessage").addEventListener("click", ()=>{
            activeFog("Que voulez-vous envoyer ?", "T'as essayé de lui parler?", "C'est vrai que c'est pas sympa ce qu'ils font", ()=>{
                receiveChat("T'as essayé de lui parler?");
                choix1n3();
            }, ()=>{
                receiveChat("C'est vrai que c'est pas sympa ce qu'ils font");
                choix1n3();
            });
        }, {once : true})
    }, 2300)
}
function choix1n3(){
    setTimeout(()=>{
        sendChat("Je sais pas trop quoi faire... j'ai beau essayer de leur faire comprendre que leur blagues sont blessantes, ils continuent...", getHeure(), "eric");
        document.querySelector("#sendmessage").addEventListener("click", ()=>{
            activeFog("Que voulez-vous envoyer ?", "Bah écoute, si ils veulent pas comprendre, bloque les ¯\\_(ツ)_/¯", "Viens avec moi demain au lycée, on ira leur parler", ()=>{
                receiveChat("Bah écoute, si ils veulent pas comprendre, bloque les ¯\\_(ツ)_/¯");
                setTimeout(()=>{
                    window.location.replace("./typing4.html");
                }, 3000)
            }, ()=>{
                receiveChat("Viens avec moi demain au lycée, on ira leur parler");
                setTimeout(()=>{
                    window.location.replace("./typing5.html");
                }, 3000)
            });
        }, {once : true})
    }, 2300)
}
function choix1(){
    createChat("eric", "Aujourd'hui");
    activeChat(setTimeout(()=>{
        sendChat("Yo, ça va?", getHeure(), "eric");
        }, 2300));
    document.querySelector("#sendmessage").addEventListener("click", ()=>{
        activeFog("Que voulez-vous envoyer ?", "Ca va, ça va", "T'as pas l'air dans ton assiette", ()=>{
            receiveChat("Ca va, ça va")
            choix1n2();
        }, ()=>{
            receiveChat("T'as pas l'air dans ton assiette");
            choix1n2();
        });
    }, {once : true})
}

friends();