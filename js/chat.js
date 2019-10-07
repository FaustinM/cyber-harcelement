function closeChat(){
    document.querySelectorAll("#chat-messages, #chatProfile, #chatProfile p").forEach((t) => t.classList.remove("animate"));
    document.querySelectorAll('.cx, .cy').forEach((t)=> t.classList.remove("s1","s2","s3"));
    document.getElementsByClassName("floatingImg")[0].classList.toggle("animate");
    setTimeout(function(){
        document.getElementById("chatBox").classList.toggle("hide");
    }, 50);
}
$(document).ready(function(){
    $(".chat-bubble").each(function(){
        $(this).click(function(){

            setTimeout(() => {document.getElementById("chatName").classList.toggle("animate");document.getElementById("chatProfile").classList.toggle("animate")}, 100);
            setTimeout(function(){
                document.getElementById("chat-messages").classList.toggle("animate");
                document.getElementsByClassName("cx")[0].classList.toggle("s1");
                document.getElementsByClassName("cy")[0].classList.toggle("s1");
                setTimeout(function(){document.getElementsByClassName("cy")[0].classList.toggle("s2");document.getElementsByClassName("cx")[0].classList.toggle("s2");}, 100);
                setTimeout(function(){document.getElementsByClassName("cy")[0].classList.toggle("s3");document.getElementsByClassName("cx")[0].classList.toggle("s3");}, 200);
            }, 150);

            document.getElementsByClassName("floatingImg")[0].classList.toggle("animate");

            const name = "Laure";
            const email = "salut@gmail.com";
            document.querySelector("#chatProfile p").textContent = name;
            document.querySelector("#chatProfile span").textContent = email;

            document.querySelectorAll(".js-ChatPicture").forEach((t) => t.setAttribute("src", "https://i.pinimg.com/originals/f7/13/a7/f713a7a277fda32ba235f37be4c9455f.jpg"));
            $('#chatBox').fadeIn();


            $('#close').unbind("click").click(function(){
                closeChat()
            });

        });
    });
});
