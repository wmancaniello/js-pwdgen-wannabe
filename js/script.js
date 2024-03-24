// Test
// alert("prova JS");


// Chiedere all'utente nome, cognome, colore preferito e generare una password


// RACCOLTA DATI E DICHIARAZIONE tramite prompt
// Nome
const userName = prompt("Benvenuto utente! Qual'è il tuo nome?"); //string
console.log(userName, typeof userName);

// Cognome
const userSurname = prompt(`Piacere ${userName}, ora mi indicheresti il tuo cognome?`); //string
console.log(userSurname, typeof userSurname);

// Colore preferito
const favoriteColor = prompt(`Perfetto ${userName} ${userSurname}, ora puoi indicarmi, qual è il tuo colore preferito?`); //string
console.log(favoriteColor, typeof favoriteColor);

// Numero random da 1 a 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber, typeof randomNumber);


// CONCATENAZIONE A CUI DO UNA COSTANTE
const newPassword = `${userName}${userSurname}${favoriteColor}${randomNumber}`; //string
console.log(newPassword, typeof newPassword);

// STAMPA DELLA PASSWORD GENERATA IN PAGINA
document.getElementById("result").innerHTML = newPassword;



