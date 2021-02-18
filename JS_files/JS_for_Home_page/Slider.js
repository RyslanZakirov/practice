document.addEventListener("DOMContentLoaded", function(){
    
    let left_button = document.querySelector(".left_switch");
    let right_button = document.querySelector(".right_switch");

    let slider = document.querySelector(".slider");
    let counter = 3;
    let factor = 1;
    let current_shift = 0;

    right_button.addEventListener("click", function(){

        current_shift = getComputedStyle(slider).left;
        left_button.disabled = false;
        counter++;
         
        let id_interval = setInterval(function(){

            if(factor == 100){
                clearInterval(id_interval);
            }
            slider.style.left = "calc(" + current_shift + " - " + factor + "%)";
            factor++;

        }, 8);
        factor = 1;
            
        if(counter == 5){
            right_button.disabled = true;
        }

    });

    left_button.addEventListener("click", function(){

        current_shift = getComputedStyle(slider).left;
        right_button.disabled = false;
        counter--;
        
        let id_interval = setInterval(function(){

            if(factor == 100){
                clearInterval(id_interval);
            }
            slider.style.left = "calc(" + current_shift + " + " + factor + "%)";
            // console.log("calc(" + current_shift + " + " + factor + "%)");
            factor++;

        },8);
        factor = 1;

        if(counter == 1){
            left_button.disabled = true;
        }
    })
})