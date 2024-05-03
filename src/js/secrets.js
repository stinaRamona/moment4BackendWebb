"use strict"; 

let secretUser = localStorage.getItem('user'); 

let secretDiv = document.getElementById("secretMessage"); 

secretDiv.innerHTML = "Inloggad som " + secretUser; 

async function getSecrets() {
    let response = await fetch("http://127.0.0.1:3000/api/mypage"); 

    let data = await response.json(); 

    console.log(data); 
}