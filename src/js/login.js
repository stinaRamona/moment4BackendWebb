"use strict"; 

//hämta in element
let loginBtnEL = document.getElementById("loginBtn"); 
let errorDivLoginEl = document.getElementById("errorDivLogin"); 

loginBtnEL.addEventListener('click', (event) => {
    event.preventDefault(); 

    let usernameLoginStr = document.getElementById("usernameLogin").value; 
    let passwordLoginStr = document.getElementById("passwordLogin").value; 

    //så inte tomma strängar går vidare 
    if(usernameLoginStr == "" || passwordLoginStr == "") {
        errorDivLoginEl.innerHTML = "Vänligen fyll i användarnamn och lösenord!"; 
    } else {
        loginUser(usernameLoginStr, passwordLoginStr);
    }
     
}); 

//Logga in användare
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

    //validering 
    if(!response.ok){
        errorDivLoginEl.innerHTML = "Fel användarnamn eller lösenord"
    }

    let data = await response.json(); 

    //Skickar med token för att nå skyddade sidan 
    let authResponse = await fetch('http://127.0.0.1:3000/api/mypage', {
        headers: {
            'Authorization': 'Bearer ' + data.response.token
        }
    });

    //om det inte är ok
    if(!authResponse.ok) {
        
        errorDivLoginEl.innerHTML = "Kunde inte auttentisera användaren"
    } else { 
        //lägger in JWT token i local storage 
        localStorage.setItem('token', data.response.token);

        //lägge in användarnamn i local storage 
        localStorage.setItem('user', username); 

        //Flyttar till min sida
        location.href="minsida.html" 
    }
}; 