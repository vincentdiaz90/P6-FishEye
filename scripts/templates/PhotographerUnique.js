class PhotographerUnique {
    constructor(photographer, idURL) {
        this._photographer = photographer;
        this._idPage = idURL;
    }

    
    createPhotographProfil() {
        if(this._idPage == this._photographer.id) {
            const $wrapper = document.createElement('div');
            $wrapper.setAttribute('class','photographMedia-entete');

            const photographerProfil = `
                <div id="photographerProfil">
                    <h3 class="photographerCard_name">${this._photographer.name}</h3>
                    <p>
                        <span class="photographerCard_location_city">${this._photographer.city},</span> 
                        <span class="photographerCard_location_country">${this._photographer.country}</span>
                    </p>
                    <p class="photographerCard_tagline">
                        ${this._photographer.tagline}
                    </p>
                </div>
                <div class="photographerContact">
                    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                </div>
                <div class="photographerPhoto">
                    <img class="photographerCard_img photographerUniqueCard_img"
                        alt="${this._photographer.name}"
                        src="${this._photographer.portrait}"
                    />
                </div>
            `;
            $wrapper.innerHTML = photographerProfil;
            return $wrapper;
        } else {
            return "";
        }        
    }
}