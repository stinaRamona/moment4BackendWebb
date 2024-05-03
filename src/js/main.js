"use strict"; 

//hämta in element 
let registerBtnEl = document.getElementById("registerBtn"); 

registerBtnEl.addEventListener('click', (event)=> { 
    event.preventDefault(); 

    let emailStr = document.getElementById("email").value; 
    let usernameStr = document.getElementById("username").value; 
    let passwordStr = document.getElementById("password").value; 

    addUser(emailStr, usernameStr, passwordStr); 
})

//lägga in ny användare på sidan 
async function addUser(email, username, password) {
    let newUser = {
        email: email, 
        username: username, 
        password: password 
    } 

    try {
        let response = await fetch("http://127.0.0.1:3000/api/register", {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            }, 
            body: JSON.stringify(newUser)
        }); 
        
        let data = await response.json(); 

        console.table(data); 

    } catch {
        console.log("Något gick fel!")
    }
}; 