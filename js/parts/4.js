let INFO_ID
async function start(){
    let i = rand(2) + 1;
    while(i){
        genPost(phraseRelou)
        i--;
        await new Promise(resolve => setTimeout(resolve, rand(800)));
    }
}
async function start2(){
    let i = 1;
    while(i){
        genPost()
        i--;
        await new Promise(resolve => setTimeout(resolve, rand(800)));
    }
};

function groupe(){
    addPosts("eric", "@paulvrz Vos blagues sont pas marantes à la longues...", rand(9), rand(13), rand(11), getHeure(), "",true);
    addPosts("paul", "@Erock Ca va c'est de l'humour, grandit un peu : ^)", rand(9), rand(13), rand(11), getHeure(), "",true);
};

start()
start2()
groupe()
setTimeout(()=>{
    activeFog("Que faire ?", "Ignorer le message", "C'est pas très grave nn plus leurs blagues @Erock", ()=>setTimeout(()=>window.location.replace("./typing6.html"), 1500), ()=>setTimeout(()=>window.location.replace("./typing7.html"), 1500))
},8000)
