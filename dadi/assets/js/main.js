

document.getElementById('throwDice').addEventListener('click', function () {

    const userDice = Math.floor(Math.random() * 6) + 1


    const enemyDice = Math.floor(Math.random() * 6) + 1

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


