class ContactForm{
    constructor(photographer, idURL){
        this._photographer = photographer;
        this._idPage = idURL;
    }

    createContactForm(){
        if(this._idPage == this._photographer.id) {

            const $wrapper = document.createElement('div');
    
            const contactFormModale = `
    
            <header>
                <h2>Contactez-moi</h2>
                <p id="contactModalNamePhotographe">${this._photographer.name}</p>

                <img src="assets/icons/close.svg" id="contactModalImg" tabindex="closeContactModal" onclick="closeModal()"/>
            </header>
        
            <form method="GET" action="http://127.0.0.1:5501/index.html" class="formContact">
            
                <div class="contactFormLabel">
                    <label for="prenom">Prénom</label>
                    <input type="text" id="prenom" name="prenom" oninput="validateFirst()">
                    <div id="firstNameError"></div>
                </div>
    
                <div class="contactFormLabel">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" oninput="validateLast()">
                    <div id="lastNameError"></div>
                </div>
    
                <div class="contactFormLabel">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" oninput="validateEmail()">
                    <div id="emailError"></div>
                </div>
    
                <div class="contactFormLabel">
                    <label for="message">Votre message</label>
                    <textarea id="message" name="message" oninput="validateMessage()"></textarea>
                    <div id="messageError"></div>
                </div>
    
                <button class="contact_button" type="submit">Envoyer</button>
                <div id="validationSubmitError"></div>
    
            </form>
            `
            $wrapper.innerHTML = contactFormModale;
            return $wrapper
        } else {
            return "";
        }
    }
}