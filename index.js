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

function removeNumber() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}


