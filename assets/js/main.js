

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


    for (let i = 0; i < emailDatabase.length; i++) {
        if (emailDatabase[i] == userEmail) {
            console.log("benvenuto")

        } else if (emailDatabase[i] != userEmail) {
            // console.log('sei nuovo da queste parti ?')

        } else {

        }

        // -----

    }

}
)


// --------- Dice Games

const userDice = Math.floor(Math.random() * 6) + 1
console.log(userDice)
// dado dell'utente

const enemyDice = Math.floor(Math.random() * 6) + 1
console.log(enemyDice)

// dado del pc

if (userDice >= enemyDice) {
    console.log('hai vinto')

} else if (userDice <= enemyDice) {
    console.log('hai perso')
}