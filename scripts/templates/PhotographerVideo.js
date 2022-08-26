class PhotographerVideo {
    constructor(media, idURL, photographeName) {
        this._media = media;
        this._idPage = idURL;
        this._photographeName = photographeName;
    }

    createPhotographerGallerie(){
        if(`${this._media.photographerId}` == this._idPage){
            const $wrapper = document.createElement('div');
            $wrapper.setAttribute('class','photographerMedia')

            this.indexMedia = document.querySelectorAll(".photographerMedia").length + 1;
            let datePrecise = `${this._media.date}`;
            datePrecise = new Date(datePrecise).getTime();
            $wrapper.setAttribute("id", `${this.indexMedia}`);
            $wrapper.setAttribute("data-likes", `${this._media.likes}`);
            //$wrapper.setAttribute("data-date", "'"+datePrecise+"'");
            $wrapper.setAttribute("data-date", `${datePrecise}`);
            $wrapper.setAttribute("data-titre", `${this._media.title}`);

            const photographerCardUnique = `
                <video title="${this._media.title}" aria-label="${this._media.title}" tabindex="${this.indexMedia}" class="photographerMedia_media" onclick="openCarrousel(${this.indexMedia}, '${this._media.title}')" onkeypress="openCarrousel(${this.indexMedia}, '${this._media.title}')">
                    <source class="src-contenu" src="assets/photographers/${this._photographeName}/${this._media._video}" type="video/mp4">
                </video>
                <div class="photographerUniqueCard">
                    <span class="photographerUniqueCard-title">${this._media.title}</span>
                    <span class="photographerUniqueCard-likes like-${this._media.id}">
                        <span id="like-${this._media.id}">${this._media.likes}</span>
                        <span class="hearth" arial-label="j'aime">
                            <i class="fas fa-solid fa-heart" onclick="systemeLike('${this._media.id}', 'like')"></i>  
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