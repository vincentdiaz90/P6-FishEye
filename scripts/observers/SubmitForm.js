
        /** Soumition du formulaire **/

const inputsValidity = {
    validateFirstTest: false,
    validateLastTest: false,
    validateEmailTest: false, 
    validateMessageTest: false
}


/*   Validation prenom  */ 

function validateFirst(){

    const prenom = document.querySelector("#prenom");
    const firstNameError = document.querySelector("#firstNameError");

    //console.log(prenom.value.length);

    // Aucune lettre n'est renseignée

    if(prenom.value.length == 0){
        console.log(prenom.value.length);
        firstNameError.innerText = "le prenom est requie";
        prenom.classList.remove('activeGreen');
        prenom.classList.add('activeRed');
        inputsValidity.validateFirstTest = false;
    
    // On accepte toutes les lettres minuscules majuscules au nombre minimum de deux
    } else if(!prenom.value.match(/^[A-Za-z]{2,}$/)) {
        firstNameError.innerText = "Renseignez au moins deux lettres";
        prenom.classList.remove('activeGreen');
        prenom.classList.add('activeRed');
        inputsValidity.validateFirstTest = false;
    
    // Tout est ok
    } else {
        firstNameError.innerText = "";
        prenom.classList.remove('activeRed');
        prenom.classList.add('activeGreen');
        inputsValidity.validateFirstTest = true;
    }
}



/*   Validation nom    */ 


function validateLast() {

    const nom = document.querySelector("#nom");
    const lastNameError = document.querySelector("#lastNameError");

    if(nom.value.length == 0){
        lastNameError.innerText = "le prénom est requie";
        nom.classList.remove('activeGreen');
        nom.classList.add('activeRed');
        inputsValidity.validateLastTest = false;
    } else if(!nom.value.match(/^[A-Z]{1,1}[A-Za-z]{1,}$/)) {
        lastNameError.innerText = "Renseignez au moins deux lettres dont la première en majuscule";
        nom.classList.remove('activeGreen');
        nom.classList.add('activeRed');
        inputsValidity.validateLastTest = false;
    } else {
        lastNameError.innerText = "";
        nom.classList.remove('activeRed');
        nom.classList.add('activeGreen');
        inputsValidity.validateLastTest = true;
    }
}

   /*   Validation email   */ 

function validateEmail(){

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");


    // Aucune information n'est saisie dans l'espace
    if(email.value.length == 0){
        emailError.innerText = "Renseignez votre email";
        email.classList.remove('activeGreen');
        email.classList.add('activeRed');
        inputsValidity.validateEmailTest = false;

    //Correspondance avec le regex
    //On acccepte les lettres chiffres pouvant être séparer par les ponctuation - _ . suivit obligatoirement par un @ suivit par des lettre ouis un . puis entre 2 et 4 lettres
    } else if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerText = "Renseignez un email valide";
        email.classList.remove('activeGreen');
        email.classList.add('activeRed');
        inputsValidity.validateEmailTest = false;

    // Tout est ok
    } else {
        emailError.innerText = "";
        email.classList.remove('activeRed');
        email.classList.add('activeGreen');
        inputsValidity.validateEmailTest = true;
    }
}


       /*   Validation message   */ 

function validateMessage(){

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");

    // Aucune lettre n'est renseignée
    if(message.value.length == 0){
        messageError.innerText = "Renseigner le sujet du message";
        message.classList.remove('activeGreen');
        message.classList.add('activeRed');
        inputsValidity.validateMessageTest = false;
    
    // On accepte toutes les lettres minuscules majuscules au nombre minimum de deux
    } else if(!message.value.match(/^[A-Za-z]{10,}$/)) {
        messageError.innerText = "Pourriez-vous être plus explicite";
        message.classList.remove('activeGreen');
        message.classList.add('activeRed');
        inputsValidity.validateMessageTest = false;
    
    // Tout est ok
    } else {
        messageError.innerText = "";
        message.classList.remove('activeRed');
        message.classList.add('activeGreen');
        inputsValidity.validateMessageTest = true;
    }
}




