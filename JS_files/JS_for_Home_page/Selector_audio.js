
document.addEventListener("DOMContentLoaded", function(){      

    let playlist = [new Audio("Music/naruto.mp3"), new Audio("Music/Втюрилась.mp3"),
    new Audio("Music/Anime.mp3"), new Audio("Music/Berzerk.mp3"), new Audio("Music/Ананасовый_сироп.mp3"),
    new Audio("Music/Миллион_чувств.mp3"), new Audio("Music/МЭЙБИ_БЭЙБИ.mp3")];

    let select;
    let current_audio = "";
    let recent_audio = "";
    let selected_option;

    document.querySelector("#music_list").addEventListener("change", function(){
        
        select = document.querySelector("#music_list").querySelectorAll("option");

        for(let i = 0; i < select.length; i++){
            if(select[i].selected == true){
                selected_option = select[i];
                if(current_audio == ""){
                    current_audio = playlist[i];
                }else{
                    recent_audio = current_audio;
                    current_audio = playlist[i];
                }
            }
        }

    })

    document.querySelector(".Play").addEventListener("click", ()=>{
        
        if(recent_audio != ""){
            recent_audio.pause();
            recent_audio.currentTime = 0.0;
        }

        document.querySelector(".show_music").classList.add("effect");
        document.querySelector(".show_music").innerHTML = "Играет: " + selected_option.value;
        current_audio.play();
    })

    document.querySelector(".Pause").addEventListener("click", ()=>{
        
        document.querySelector(".show_music").classList.remove("effect");
        current_audio.pause();
    })

    let range = document.querySelector(".range");

    range.addEventListener("mousemove", function(){
       
        current_audio.volume = range.value / 100;
    })


    document.body.addEventListener("keydown", function(event){

        if(event.code == "Backquote"){
            document.querySelector(".music_loader").style.display = "block";
        }

        if(event.code == "KeyA"){
            document.querySelector(".music_loader").style.display = "none";
        }

    });

    document.querySelector(".send_file").addEventListener("click", function(){
        
        let file = document.querySelector(".input_file");
        playlist.push(new Audio("Music/" + file.files[0].name));

        let option = document.createElement("option");
        option.value = file.files[0].name.slice(0, file.files[0].name.length - 4);
        option.innerHTML = file.files[0].name.slice(0, file.files[0].name.length - 4);

        document.querySelector("#music_list").append(option);
  })
})