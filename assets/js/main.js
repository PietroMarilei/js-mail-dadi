

const emailDatabase = ['pietro@gmail.com', 'giuliano@gmail.com', 'donato@gmail.com', 'fabio@gmail.com']
console.log(emailDatabase);
// il nostr array

document.querySelector('button').addEventListener('click', function () {

    const userEmail = document.querySelector('input').value;
    // console.log(userEmail);

    // if (emailDatabase.includes('pietro@gmail.com') && userEmail === ('pietro@gmail.com')) {
    //     console.log('ciao pietro');
    //     // se ti chiami pietro@gmail.com ed é dentro l'array allora okey

    // } else if (emailDatabase.includes('giuliano@gmail.com') && userEmail === ('giuliano@gmail.com')) {
    //     console.log('ciao Giuliano');

    // } else if (emailDatabase.includes('donato@gmail.com') && userEmail === ('donato@gmail.com')) {
    //     console.log('ciao Donato');

    // } else if (emailDatabase.includes('fabio@gmail.com') && userEmail === ('donato@gmail.com')) {
    //     console.log('ciao Fabio');

    // } else {
    //     console.log('sei nuovo da queste parti?')

    // }

    let hasAccess = false;
    // crei una variabile esterna

    for (let i = 0; i < emailDatabase.length; i++) {
        if (emailDatabase[i] == userEmail) {
            hasAccess = true;
            // la cambi se corrisponde
        }
    }

    // fuori dal loop
    // scrivi una cosa se é  vero e un altra se é falso

    if (hasAccess == true) {
        console.log("Benvenuto");
        document.getElementById("warning").innerHTML = "Benvenuto";

    } else if (hasAccess == false) {
        console.log("Sei nuovo da queste parti ?");
        document.getElementById("warning").innerHTML = "Sei nuovo da queste parti ?";
    }



})




// --------- Dice Games

document.getElementById('start').addEventListener('click', function () {

    const userDice = Math.floor(Math.random() * 6) + 1
    console.log(userDice);
    // dado dell'utente

    const enemyDice = Math.floor(Math.random() * 6) + 1
    console.log(enemyDice);

    document.getElementById('result').innerHTML = `Questo é il tuo risultato ${userDice} <br>
    E questo é quello del computer ${enemyDice}`;

    // dado del pc

    if (userDice > enemyDice) {
        console.log('hai vinto');
        document.getElementById('winner').innerHTML = "Hai vinto";

    } else if (userDice < enemyDice) {
        console.log('hai perso');
        document.getElementById('winner').innerHTML = "Hai perso";
    } else {
        console.log('pareggio');
        document.getElementById('winner').innerHTML = "Pareggio";
    }

})


