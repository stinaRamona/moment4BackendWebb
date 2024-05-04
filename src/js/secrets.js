"use strict"; 
//För att skriva ut meddelande till användaren som är inloggad
let secretUser = localStorage.getItem('user'); 

let secretDiv = document.getElementById("secretMessage"); 

secretDiv.innerHTML = "Välkommen tillbaka " + secretUser; 