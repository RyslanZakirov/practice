document.addEventListener("DOMContentLoaded", function(){


    var chess_knight = {
        
        name_object: "chess_knight",

        check_move(vsp_i , vsp_j){
            if(((vsp_i - 2) >= 0) && ((vsp_j - 1) >= 0)){
                array_of_array[vsp_i - 2][vsp_j - 1].style.backgroundColor = color_block;
            }
    
            if(((vsp_i - 2) >= 0) && ((vsp_j + 1) >= 0) && (vsp_j < 7)){
                array_of_array[vsp_i - 2][vsp_j + 1].style.backgroundColor = color_block;
            }
            if(((vsp_i - 1) >= 0) && ((vsp_j - 2) >= 0)){
                array_of_array[vsp_i - 1][vsp_j - 2].style.backgroundColor = color_block;
            }
            if(((vsp_i - 1) >= 0) && (vsp_j < 6)){
                array_of_array[vsp_i - 1][vsp_j + 2].style.backgroundColor = color_block;
            }
            if((vsp_i < 7) && (vsp_j < 6)){
                array_of_array[vsp_i + 1][vsp_j + 2].style.backgroundColor = color_block;
            }
            if((vsp_i < 6) && (vsp_j < 7)){
                array_of_array[vsp_i + 2][vsp_j + 1].style.backgroundColor = color_block;
            }
            if((vsp_i < 6) && ((vsp_j - 1) >= 0)){
                array_of_array[vsp_i + 2][vsp_j - 1].style.backgroundColor = color_block;
            }
            if((vsp_i < 7) && ((vsp_j - 2) >= 0)){
                array_of_array[vsp_i + 1][vsp_j - 2].style.backgroundColor = color_block;
            }
        }
    }

    var rook = {
        
        name_object: "rook",

        check_move(vsp_i, vsp_j, array_of_array, color_block){
           
            let temp_index = 0;
           
            while((vsp_i - temp_index) > 0 || (vsp_i + temp_index < 7)){
                temp_index++;
                if(vsp_i - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j].style.backgroundColor = color_block;
                }
                if((vsp_i + temp_index) <= 7){
                    array_of_array[vsp_i + temp_index][vsp_j].style.backgroundColor = color_block;
                }
            }
            
            temp_index = 0;
            while((vsp_j - temp_index) > 0 || (vsp_j + temp_index < 7)){
                temp_index++;
                if(vsp_j - temp_index >= 0){
                    array_of_array[vsp_i][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if((vsp_j + temp_index) <= 7){
                    array_of_array[vsp_i][vsp_j + temp_index].style.backgroundColor = color_block;
                }
            }
        }
    }

    var queen = {
        
        name_object: "queen",

        check_move(vsp_i, vsp_j, array_of_array, color_block){
            
            var temp_index = 0;

            while((vsp_i - temp_index > 0 || vsp_j - temp_index > 0 || vsp_i + temp_index < 7 || vsp_j + temp_index < 7)){
                temp_index++;
                
                if(vsp_i - temp_index >= 0 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i - temp_index >= 0 && vsp_j + temp_index <= 7){
                    array_of_array[vsp_i - temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i + temp_index <= 7 && vsp_j + temp_index <= 7){
                    array_of_array[vsp_i + temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }

                if(vsp_i + temp_index <= 7 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i + temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }
            }

            temp_index = 0;
            while((vsp_i - temp_index > 0)||(vsp_i + temp_index < 7)||(vsp_j - temp_index > 0)||(vsp_j + temp_index < 7)){

                temp_index++;
                if(vsp_i - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j].style.backgroundColor = color_block;
                }
                if(vsp_j - temp_index >= 0){
                    array_of_array[vsp_i][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i + temp_index <= 7){
                    array_of_array[vsp_i + temp_index][vsp_j].style.backgroundColor = color_block;
                }
                if(vsp_j + temp_index <= 7){
                    array_of_array[vsp_i][vsp_j + temp_index].style.backgroundColor = color_block;
                }
            }
        }
    }

    var pawn = {
        name_object: "pawn",

        check_move(vsp_i, vsp_j, array_of_array, color_block){
            if((vsp_i > 0) && (vsp_i < 7)){
                array_of_array[vsp_i + 1][vsp_j].style.backgroundColor = color_block;
                array_of_array[vsp_i - 1][vsp_j].style.backgroundColor = color_block;
            }
            if(vsp_i == 0){
                array_of_array[vsp_i + 1][vsp_j].style.backgroundColor = color_block;
            }
            if(vsp_i == 7){
                array_of_array[vsp_i - 1][vsp_j].style.backgroundColor = color_block;
                
            }
        }
    }

    var bishop = {
        name_object: "bishop",
        check_move(vsp_i, vsp_j, array_of_array, color_block){

            let temp_index = 0;
            while(vsp_i - temp_index > 0 || vsp_j - temp_index > 0||vsp_i + temp_index < 7 || vsp_j + temp_index < 7){
                temp_index++;
                if(vsp_i - temp_index >= 0 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i - temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i + temp_index <=7 && vsp_j + temp_index <=7){
                    array_of_array[vsp_i + temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i + temp_index <=7 && vsp_j - temp_index >= 0){
                    array_of_array[vsp_i + temp_index][vsp_j - temp_index].style.backgroundColor = color_block;
                }
                if(vsp_i - temp_index >= 0 && vsp_j + temp_index <=7){
                    array_of_array[vsp_i - temp_index][vsp_j + temp_index].style.backgroundColor = color_block;
                }
            }

        }
    }

    var king = {
        name_object: "king",
        check_move(vsp_i, vsp_j, array_of_array, color_block){
                if(vsp_i - 1 >= 0 && vsp_j - 1 >= 0){
                    array_of_array[vsp_i - 1][vsp_j - 1].style.backgroundColor = color_block;
                }
                if(vsp_i - 1 >= 0){
                    array_of_array[vsp_i - 1][vsp_j].style.backgroundColor = color_block;
                }
                if(vsp_i - 1 >= 0 && vsp_j + 1 <= 7){
                    array_of_array[vsp_i - 1][vsp_j + 1].style.backgroundColor = color_block;
                }
                if(vsp_j - 1 >= 0){
                    array_of_array[vsp_i][vsp_j - 1].style.backgroundColor = color_block;
                }
                if(vsp_j + 1 <=7){
                    array_of_array[vsp_i][vsp_j + 1].style.backgroundColor = color_block;
                }
                if(vsp_i + 1 <= 7 && vsp_j - 1 >= 0){
                    array_of_array[vsp_i + 1][vsp_j - 1].style.backgroundColor = color_block;
                }
                if(vsp_i + 1 <= 7){
                    array_of_array[vsp_i + 1][vsp_j].style.backgroundColor = color_block;
                }
                if(vsp_i + 1 <= 7 && vsp_j + 1 <= 7){
                    array_of_array[vsp_i + 1][vsp_j + 1].style.backgroundColor = color_block;
                }
            }
    }

    var color_block = "red";

    function create_figure(vsp_i,vsp_j, array_of_array, image){
        
        let array_of_figure = document.querySelector(".selection_bar").querySelectorAll("input");
        let name_of_figure = "";

        image.style.width = "36px";
        image.style.position = "relative";
        image.style.top = "-10px";
        image.style.left = "0px";


        for(let i = 0; i < array_of_figure.length; i++){
            if(array_of_figure[i].checked){
                name_of_figure = array_of_figure[i].value;
            }
        }

        switch(name_of_figure){
            
            case chess_knight.name_object:
                chess_knight.check_move(vsp_i, vsp_j);
                image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxMGMxMC41IDEgMTYuNSA4IDE2IDI5SDE1YzAtOSAxMC02LjUgOC0yMSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNCAxOGMuMzggMi45MS01LjU1IDcuMzctOCA5LTMgMi0yLjgyIDQuMzQtNSA0LTEuMDQyLS45NCAxLjQxLTMuMDQgMC0zLTEgMCAuMTkgMS4yMy0xIDItMSAwLTQuMDAzIDEtNC00IDAtMiA2LTEyIDYtMTJzMS44OS0xLjkgMi0zLjVjLS43My0uOTk0LS41LTItLjUtMyAxLTEgMyAyLjUgMyAyLjVoMnMuNzgtMS45OTIgMi41LTNjMSAwIDEgMyAxIDMiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOS41IDI1LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDEgMSAxIDB6bTUuNDMzLTkuNzVhLjUgMS41IDMwIDEgMS0uODY2LS41LjUgMS41IDMwIDEgMSAuODY2LjV6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg==";
                break;
           
                case queen.name_object:
                queen.check_move(vsp_i, vsp_j, array_of_array, color_block);
                image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04IDEyYTIgMiAwIDEgMS00IDAgMiAyIDAgMSAxIDQgMHptMTYuNS00LjVhMiAyIDAgMSAxLTQgMCAyIDIgMCAxIDEgNCAwek00MSAxMmEyIDIgMCAxIDEtNCAwIDIgMiAwIDEgMSA0IDB6TTE2IDguNWEyIDIgMCAxIDEtNCAwIDIgMiAwIDEgMSA0IDB6TTMzIDlhMiAyIDAgMSAxLTQgMCAyIDIgMCAxIDEgNCAweiIvPjxwYXRoIGQ9Ik05IDI2YzguNS0xLjUgMjEtMS41IDI3IDBsMi0xMi03IDExVjExbC01LjUgMTMuNS0zLTE1LTMgMTUtNS41LTE0VjI1TDcgMTRsMiAxMnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTkgMjZjMCAyIDEuNSAyIDIuNSA0IDEgMS41IDEgMSAuNSAzLjUtMS41IDEtMS41IDIuNS0xLjUgMi41LTEuNSAxLjUuNSAyLjUuNSAyLjUgNi41IDEgMTYuNSAxIDIzIDAgMCAwIDEuNS0xIDAtMi41IDAgMCAuNS0xLjUtMS0yLjUtLjUtMi41LS41LTIgLjUtMy41IDEtMiAyLjUtMiAyLjUtNC04LjUtMS41LTE4LjUtMS41LTI3IDB6IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xMS41IDMwYzMuNS0xIDE4LjUtMSAyMiAwTTEyIDMzLjVjNi0xIDE1LTEgMjEgMCIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=";
                break;
            case rook.name_object:
                rook.check_move(vsp_i, vsp_j, array_of_array, color_block);
                image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDM5aDI3di0zSDl2M3ptMy0zdi00aDIxdjRIMTJ6bS0xLTIyVjloNHYyaDVWOWg1djJoNVY5aDR2NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMzQgMTRsLTMgM0gxNGwtMy0zIi8+PHBhdGggZD0iTTMxIDE3djEyLjVIMTRWMTciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTMxIDI5LjVsMS41IDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGQ9Ik0xMSAxNGgyMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjwvZz48L3N2Zz4=";
                break;
            case pawn.name_object: 
                pawn.check_move(vsp_i, vsp_j, array_of_array, color_block);
                image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PHBhdGggZD0iTTIyLjUgOWMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzE3LjMzIDE2LjUgMTYgMTguNTkgMTYgMjFjMCAyLjAzLjk0IDMuODQgMi40MSA1LjAzLTMgMS4wNi03LjQxIDUuNTUtNy40MSAxMy40N2gyM2MwLTcuOTItNC40MS0xMi40MS03LjQxLTEzLjQ3IDEuNDctMS4xOSAyLjQxLTMgMi40MS01LjAzIDAtMi40MS0xLjMzLTQuNS0zLjI4LTUuNjIuNDktLjY3Ljc4LTEuNDkuNzgtMi4zOCAwLTIuMjEtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg=="
                break;
            case bishop.name_object: 
                bishop.check_move(vsp_i, vsp_j, array_of_array,color_block);
                image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNOSAzNmMzLjM5LS45NyAxMC4xMS40MyAxMy41LTIgMy4zOSAyLjQzIDEwLjExIDEuMDMgMTMuNSAyIDAgMCAxLjY1LjU0IDMgMi0uNjguOTctMS42NS45OS0zIC41LTMuMzktLjk3LTEwLjExLjQ2LTEzLjUtMS0zLjM5IDEuNDYtMTAuMTEuMDMtMTMuNSAxLTEuMzU0LjQ5LTIuMzIzLjQ3LTMtLjUgMS4zNTQtMS45NCAzLTIgMy0yeiIvPjxwYXRoIGQ9Ik0xNSAzMmMyLjUgMi41IDEyLjUgMi41IDE1IDAgLjUtMS41IDAtMiAwLTIgMC0yLjUtMi41LTQtMi41LTQgNS41LTEuNSA2LTExLjUtNS0xNS41LTExIDQtMTAuNSAxNC01IDE1LjUgMCAwLTIuNSAxLjUtMi41IDQgMCAwLS41LjUgMCAyeiIvPjxwYXRoIGQ9Ik0yNSA4YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAxIDEgNSAweiIvPjwvZz48cGF0aCBkPSJNMTcuNSAyNmgxME0xNSAzMGgxNW0tNy41LTE0LjV2NU0yMCAxOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PC9nPjwvc3ZnPg==";
                break;
            case king.name_object:
                king.check_move(vsp_i,vsp_j, array_of_array, color_block);
                image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMi41IDExLjYzVjZNMjAgOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIyLjUgMjVzNC41LTcuNSAzLTEwLjVjMCAwLTEtMi41LTMtMi41cy0zIDIuNS0zIDIuNWMtMS41IDMgMyAxMC41IDMgMTAuNSIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMTEuNSAzN2M1LjUgMy41IDE1LjUgMy41IDIxIDB2LTdzOS00LjUgNi0xMC41Yy00LTYuNS0xMy41LTMuNS0xNiA0VjI3di0zLjVjLTMuNS03LjUtMTMtMTAuNS0xNi00LTMgNiA1IDEwIDUgMTBWMzd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjUgMzBjNS41LTMgMTUuNS0zIDIxIDBtLTIxIDMuNWM1LjUtMyAxNS41LTMgMjEgMG0tMjEgMy41YzUuNS0zIDE1LjUtMyAyMSAwIi8+PC9nPjwvc3ZnPg==";
        }

        return image;
    }

    let button = document.querySelector(".click");
    
    var array_of_array = [];
    for(let i = 0; i < 8; i++){
        array_of_array[i] = [];
    }

    let audio = new Audio();
    audio.src = "naruto.mp3";

    var image = null;

    // button.addEventListener("click", function(event){

        //audio.play();

        var variable = 0;
        var top = 0;

        let index = 0;
        let count = 0;
        let odd = 0;
        let iter = 0;
        let flag = true;

        for(let i = 0; i < 64; i++){
            
            let element = document.createElement("div");
            element.style.position = "absolute";
            element.style.left = variable + "px";
            element.style.top = top + "px";
            element.style.width = "40px";
            element.style.height = "40px";
            element.style.border = "1px solid grey";
            element.style.boxSizing = "border-box";
            element.style.fontSize = "9px";

            element.innerHTML = (i + 1);
            variable = variable + 40;
            
            if(variable > 280){
                top = top + 40;
                variable = 0;
            }
            
             array_of_array[index][count] = element;
             count++;
             odd = i;
             if((odd % 2 == 0)&&(iter == 0) || (odd % 2 == 1)&&(iter == 1)){
                element.style.backgroundColor = "white";
             } else{
                 element.style.backgroundColor = "black";
            }
             if(count >= 8){
                 index++;
                 count = 0;
                if(flag == true){
                    flag = false;
                    iter = 1;
                }else{
                    flag = true;
                    iter = 0;
                }
             }
        
             let vsp_i = 0;
             let vsp_j = 0;
            
            
            element.addEventListener("mousedown", function(){
                
                if(element.querySelector("img") != null){
                    element.querySelector("img").remove();
                }
                
                image = document.createElement("img");

                image.ondragstart = function(){
                    return false;
                }

                for(let i = 0; i < 8; i++){
                    for(let j  = 0; j < 8; j++){
                        if(array_of_array[i][j] == element){
                            vsp_i = i;
                            vsp_j = j;
                        }
                    }
                }

                element.append(create_figure(vsp_i, vsp_j, array_of_array, image));
                
            })
            
            element.addEventListener("mouseup", function(){

                let flag = true;

                for(let i = 0; i < 8; i++){
                    for(let j = 0; j < 8; j++){

                        image.remove();

                        if(flag == true){
                            if(j % 2 == 0){
                                array_of_array[i][j].style.backgroundColor = "white";
                            }else{
                                array_of_array[i][j].style.backgroundColor = "black";
                            }
                        }else{
                            if(j % 2 == 1){
                                array_of_array[i][j].style.backgroundColor = "white";
                            }else{
                                array_of_array[i][j].style.backgroundColor = "black";
                            }
                        }
                    }
                    if(flag == true){
                        flag = false;
                    } else{
                        flag = true;
                    }
                }
            });

            document.body.querySelector(".main_field").append(element);
        }
        
    // });

})