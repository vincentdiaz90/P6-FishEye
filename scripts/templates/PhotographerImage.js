class PhotographerImage {
    constructor(media, idURL, photographeName, hearth) {
        this._media = media;
        this._idPage = idURL;
        this._photographeName = photographeName;
        this.Hearth = hearth
    }

    createPhotographerGallerie(){
        if(`${this._media.photographerId}` == this._idPage){
            
            const $wrapper = document.createElement('div');
            $wrapper.setAttribute('class','photographerMedia');

            this.indexMedia = document.querySelectorAll(".photographerMedia").length + 1;
            let datePrecise = `${this._media.date}`;
            datePrecise = new Date(datePrecise).getTime();
            $wrapper.setAttribute("id", `${this.indexMedia}`);
            $wrapper.setAttribute("data-likes", `${this._media.likes}`);
            $wrapper.setAttribute("data-date", `${datePrecise}`);
            $wrapper.setAttribute("data-titre", `${this._media.title}`);

            const photographerCardUnique = `
                <img alt="${this._media.title}" class="photographerMedia_media src-contenu" src="assets/photographers/${this._photographeName}/${this._media._image}" tabindex="${this.indexMedia}" onclick="openCarrousel(${this.indexMedia}, '${this._media.title}')" onkeypress="openCarrousel(${this.indexMedia}, '${this._media.title}')">
                <div class="photographerUniqueCard">
                    <span class="photographerUniqueCard-title">${this._media.title}</span>
                    <span class="photographerUniqueCard-likes like-${this._media.id}">
                        <span id="like-${this._media.id}">${this._media.likes}</span>
                        <span class="hearth" aria-label="j'aime">
                            <i class="fa-solid fa-heart" onclick="systemeLike('${this._media.id}', 'like')"></i>
                        </span>
                    </span>
                </div>
            `;

            $wrapper.innerHTML = photographerCardUnique;
            return $wrapper;
        } else {
            return "";
        }        
    }
}