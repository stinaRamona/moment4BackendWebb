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
    let response = await fetch("http://127.0.0.1:3000/api/login", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }); 

    let data = await response.json();
    
    //lägger in JWT token i local storage 
    localStorage.setItem('token', data.response.token); 

    //Skickar med token för att nå skyddade sidan 
    let authResponse = await fetch('http://127.0.0.1:3000/api/mypage', {
        headers: {
            'Authorization': 'Bearer ' + data.response.token
        }
    });

    //om det inte är ok, något gått snett
    if(!authResponse.ok) {
        throw new Error("Något har gått fel vid authoriseringen!");
        //något ska hända på sidan 
    } else {
        location.href="minsida.html" 
    }


}; 