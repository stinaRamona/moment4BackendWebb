"use strict"; 

//Logga in användare
let loginBtnEL = document.getElementById("loginBtn"); 

loginBtnEL.addEventListener('click', (event) => {
    event.preventDefault(); 

    let usernameLoginStr = document.getElementById("usernameLogin").value; 
    let passwordLoginStr = document.getElementById("passwordLogin").value; 

    loginUser(usernameLoginStr, passwordLoginStr); 
}); 

async function loginUser(username, password) {
    console.log(username, password); 
}; 