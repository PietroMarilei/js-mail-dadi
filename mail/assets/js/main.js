
let hasAccess = false;

const emailDatabase = ['pietro@gmail.com', 'mauro@gmail.com', 'marco@gmail.com', 'alessio@gmail.com']
console.log(emailDatabase);

const formEl = document.querySelector('form');
console.log(formEl);

formEl.addEventListener('submit', function (event) {
    event.preventDefault()

    const userEmail = document.getElementById('userEmail').value;


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







