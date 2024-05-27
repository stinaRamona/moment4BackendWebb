"use strict"; 
//För att skriva ut meddelande till användaren som är inloggad
let secretUser = localStorage.getItem('user'); 

let storedToken = localStorage.getItem('token'); 

let secretDiv = document.getElementById("secretMessage"); 

let infoDiv = document.getElementById("accountInfo"); 

secretDiv.innerHTML = "Välkommen tillbaka " + secretUser; 

function init() {
  //kontrollerar om token finns sparad i local storage 
if(!localStorage.getItem('token')) {
    window.location.href = "login.html"
    return; 
}

    //hämtar information om användaren  
fetch('http://127.0.0.1:3000/api/mypage', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${storedToken}`
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Något gick fel.');
    }
  })
  .then(data => {
    console.log(data)
    printInfo(data); // skickar med användardata till funktion som printar ut data 
  })
  .catch(error => {
    console.error(error);
  });
}

function printInfo(data){
    infoDiv.innerHTML = `
    <h2>Information om ditt konto:</h2>
    <b>Ditt id: </b>${data.id}<br>
    <br>
    <b>Din epost: </b>${data.email}<br>
    <br>
    <b>Kontot skapades: </b>${data.created}`
; }

window.onload = init();
