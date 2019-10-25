function closeChat(){
    document.querySelectorAll("#chatName, #chat-messages, #chatProfile, #chatProfile p, #chatProfile span").forEach((t) => t.classList.remove("animate"));
    document.querySelectorAll('.cx, .cy').forEach((t)=> t.classList.remove("s1","s2","s3"));
    document.getElementsByClassName("floatingImg")[0].classList.toggle("animate");
    setTimeout(function(){
        document.getElementById("chatBox").classList.add("hide");
    }, 50);
}
function openChat(){
    if(document.getElementById("chatBox").classList.contains("hide")){
                setTimeout(() => {document.getElementById("chatName").classList.toggle("animate");document.getElementById("chatProfile").classList.toggle("animate")}, 100);
                setTimeout(function(){
                    document.getElementById("chat-messages").classList.toggle("animate");
                    document.getElementsByClassName("cx")[0].classList.toggle("s1");
                    document.getElementsByClassName("cy")[0].classList.toggle("s1");
                    setTimeout(function(){document.getElementsByClassName("cy")[0].classList.toggle("s2");document.getElementsByClassName("cx")[0].classList.toggle("s2");}, 100);
                    setTimeout(function(){document.getElementsByClassName("cy")[0].classList.toggle("s3");document.getElementsByClassName("cx")[0].classList.toggle("s3");}, 200);
                }, 150);

                document.getElementsByClassName("floatingImg")[0].classList.toggle("animate");

                document.getElementById("chatBox").classList.remove("hide");
                document.getElementById("close").addEventListener("click",closeChat, {once : true});
    }
}

function sendChat(msg, time, image){
    let m = document.querySelector("#t-chat");
    let mDiv = document.querySelector("#chat-messages");
    let clone = document.importNode(m.content, true);

    clone.querySelector(".time").textContent = time;
    clone.querySelector(".chat-text").textContent = msg;
    clone.querySelector(".js-ChatPicture").setAttribute("src", people[image].face);
    clone.querySelector(".bubble").classList.add("right");

    mDiv.appendChild(clone);
    mDiv.scrollIntoView(false);
    twemoji.parse(document.querySelector("#chatBox"))
}
function receiveChat(msg, time){
    let m = document.querySelector("#t-chat");
    let mDiv = document.querySelector("#chat-messages");
    let clone = document.importNode(m.content, true);

    clone.querySelector(".time").textContent = time;
    clone.querySelector(".chat-text").textContent = msg;
    clone.querySelector(".js-ChatPicture").setAttribute("src", "img/user-picture.png");
    clone.querySelector(".message").classList.add("right");
    mDiv.appendChild(clone);
    mDiv.scrollIntoView(false);
    twemoji.parse(document.querySelector("#chatBox"))
}
function clearChat(){
    document.querySelectorAll(".message").forEach((t) => t.remove());
}
function createChat(who, date){
    document.querySelector("#js-chatDate").textContent = date;
    document.querySelector("#chatProfile span").textContent = people[who].chatSubtitle;
    document.querySelector("#chatName").textContent = people[who].name;
    document.querySelector("#chat").style.backgroundImage = "url(" + people[who].face +")"
    document.querySelector("#js-chatImage").setAttribute("src", people[who].face);
}
function activeChat(handler){
    document.getElementById("chat").classList.remove("hide");
    document.getElementById("chat").addEventListener("click", ()=>{handler}, {once : true});
}
function desactiveChat(){
    document.getElementById("chat").classList.add("hide")
}