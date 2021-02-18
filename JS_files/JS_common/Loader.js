window.onload = function(){

    let loader = document.querySelector(".loader");
    
    loader.style.opacity = getComputedStyle(loader).opacity;

    setTimeout(function(){
       
        let id_interval = setInterval(() => {
            
            loader.style.opacity -= 0.05; 

            if(loader.style.opacity <= 0){
                clearInterval(id_interval);
                document.body.style.overflow = "auto";
                loader.style.display = "none";
            }

        }, 40);

    },750);
}