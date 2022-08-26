class PricePhotographer {
    constructor(data, idURL) {
        this._data = data
        this._idPage = idURL
    }


    createPrice() {
        if(this._idPage == this._data.id){
            const $wrapper = document.createElement('span');
    
            const PricePhotographer = `
                ${this._data.price} / jour
            `
            $wrapper.innerHTML = PricePhotographer
            return $wrapper;
        } else {
            return "";
        } 
    }
}