/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
document.getElementById('btn').addEventListener('click', obtenirUtilisateur);
function obtenirUtilisateur(event) {
    event.preventDefault();
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => lirePersonne(data));


}
function lirePersonne(personne) {
    for (let i = 0; i < personne.length; i++) {
        console.log(personne);
        document.getElementById("output").innerText = personne[0].login;
        // document.getElementById("output").innerText = person[0].avatar_url;
    }
}