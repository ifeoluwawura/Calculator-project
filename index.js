function input(inputValue){
    console.log(inputValue);
    document.getElementById("display").value += inputValue;
}

function Result(){
    document.getElementById("display").value = eval(display.value);

}

function clearDisplay() {
    document.getElementById("display").value = "";
    
    

}



