class PhotographersCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographersCard() {
        const $wrapper = document.createElement('div');
        
        const photographerCard = `
            <div id="card${this._photographer.id}">
                <a class="photgraphers_link" href="photographer.html?id=${this._photographer.id}" aria-label="${this._photographer.name}">
                    <img class="photographerCard_img"
                        alt="${this._photographer.name}"
                        src="${this._photographer.portrait}"
                    />
                    <h3 class="photographerCard_name">${this._photographer.name}</h3>
                </a>
                <div class="photographerCard_location">
                    <p>
                        <span class="photographerCard_location_city">${this._photographer.city},</span> 
                        <span class="photographerCard_location_country">${this._photographer.country}</span>
                    </p>
                    
                    <p class="photographerCard_tagline">${this._photographer.tagline}</p>
                    <p class="photographerCard_price">${this._photographer.price}€/Jour</p>
                </div>
            </div>
        `
        
        $wrapper.innerHTML = photographerCard;
        return $wrapper;
    }
}

