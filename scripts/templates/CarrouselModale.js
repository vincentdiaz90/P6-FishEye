class CarrouselModale {
    constructor(media, idPhoto) {
        this._media = media
        this._idPhoto = idPhoto

    }

    createCarrouselModale() {
        //console.log(this._element);
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('carrousel-modale-form')

        this.indexMedia = document.querySelectorAll(".photographerMedia").length + 1;

        const carrouselModale = `
            <div class="close-cross" onclick="closeCarrousel()"><i class="fa-solid fa-xmark"></i></div>
            <div class="cont-slides"><img src="" alt="" class="cont-slides-img"></img></div>
            <div class="commandes">
                <button >
                    <img src="assets/images/left.svg" class="left"/>
                </button>
                <button >
                    <img src="assets/images//right.svg" class="right"/>
                </button>
            </div>
            <div class="name-media">
                <p></p>
            </div>
        `

        $wrapper.innerHTML = carrouselModale
        return $wrapper

    }
}