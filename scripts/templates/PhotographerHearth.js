class PhotographerHearth {
    constructor(hearthTotal) {
        this._hearthTotal = hearthTotal;
    }

    createHearth() {
        const $wrapper = document.createElement('span');

        const photographerHearth = `
            <span class="photographerNbHearths"> ${this._hearthTotal} </span>♥
        `
        $wrapper.innerHTML = photographerHearth;
        return $wrapper;
    }
}

