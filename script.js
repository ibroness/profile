 const changeText = document.getElementById("change-text");
 const update = document.getElementById("update");
 function updateText(){
    changeText.textContent = "I am currently learning Javacript";
 }
 update.addEventListener("click", changeText);