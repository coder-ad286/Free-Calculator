let buttons = document.querySelectorAll("#btn");
let inputBox = document.querySelector(".output");

for(let button of buttons){
	button.addEventListener('click',function(){
    display(button.value)});
}

function display(val) {
   inputBox.value +=val; 
}

function Calculate(){
	inputBox.value=eval(inputBox.value);
}

function Delete(){
	inputBox.value=inputBox.value.slice(0,-1);
}
 function Clear(){
 	inputBox.value="";
 }