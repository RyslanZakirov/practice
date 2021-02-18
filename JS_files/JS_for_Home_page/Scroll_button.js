document.addEventListener("DOMContentLoaded", function(){

    let button = document.querySelector(".scroll_button");

    window.addEventListener("scroll" , function(){
        if(window.pageYOffset > 700){
            button.style.display = "block";
        }

        if(window.pageYOffset < 700){
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function(){
        
        window.scrollTo(0, 0);

    })
});