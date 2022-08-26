class Api {
    constructor(url) {
        this._url = url
    }

    async getPhotographersJSON() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('Une erreur du type : ', err))
    }

    async getMediasJSON() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('Une erreur du type : ', err))
    }
}


class PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.getPhotographersJSON()
    }

    async getMedias() {
        return await this.getMediasJSON()
    }
}

