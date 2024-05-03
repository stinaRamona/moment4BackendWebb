"use strict"; 

let secretUser = localStorage.getItem('user'); 

let secretDiv = document.getElementById("secretMessage"); 

secretDiv.innerHTML = "Inloggad som " + secretUser; 