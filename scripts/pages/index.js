class Index {
    constructor() {
        this.$photographersWrapper = document.querySelector('.photographers_section');
        this.photographersApi = new PhotographerApi('data/photographers.json');
    }

    async main() {
        // Ici je récupère mes photographes de mon fichier photographers.json
        const photographersData = await this.photographersApi.getPhotographers();
        
        photographersData
            // Ici, je transforme mon tableau de données en un tableau de classe Photographer
            .map(photographer => new Photographers(photographer))
            .forEach(photographer => {
                const Template = new PhotographersCard(photographer);
                this.$photographersWrapper.appendChild(
                    Template.createPhotographersCard()
                );
            });
    }
}

const index = new Index();
index.main();