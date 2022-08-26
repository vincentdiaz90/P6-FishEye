class Photographer {
    constructor() {

            // DOM
        this.photographHeader = document.querySelector('.photograph-header');
        this.photographMedia = document.querySelector('.photograph-media');
        this.profilHearth = document.querySelector('.photographers-hearth');
        this.profilPrice = document.querySelector('.photographers-price');
        this.filterFormWrapper = document.querySelector('.filter-form-wrapper');
        this.carrouselModale = document.querySelector('.carrousel-modale');
        this.contactForm = document.querySelector('#contact-modal');

            // API
        this.photographersApi = new PhotographerApi('data/photographers.json');
    }

    async main() {
        let idURL = new URL(window.location.href).searchParams.get("id");


        /* Identification du photographe dans la BDD (jointure)*/

        let photographeNameIntermediaire = "";
        let photographeName = "";

        let photographsid = await this.photographersApi.getPhotographers();
        console.log(photographsid);
        photographsid
            .map(photographerid => new Photographers(photographerid))
            .forEach(photographerid => {
                if(photographerid.id == idURL){  
                    photographeNameIntermediaire = photographerid.name;
                    photographeName = photographeNameIntermediaire.replace(" ","_"); 
                }
            });

            /* Intégration de la carte du photographe*/

        photographsid
            .map(photographer => new Photographers(photographer))
            .forEach(photographer => {
            const Template = new PhotographerUnique(photographer, idURL);
            this.photographHeader.append(
                Template.createPhotographProfil()
            );
        });

            /* Intégration des medias correspondants au photographe */

        let mediasData = await this.photographersApi.getMedias();
        console.log(mediasData);

        mediasData
            .map(medias => new Medias(medias))
            .forEach(medias => {
            if (medias._image) {
                let MediaTemplate = new PhotographerImage(medias, idURL, photographeName, this.hearth);
                this.photographMedia.append(
                    MediaTemplate.createPhotographerGallerie()
                );
            } else if(medias._video) {
                let MediaTemplate = new PhotographerVideo(medias, idURL, photographeName, this.hearth);
                this.photographMedia.append(
                    MediaTemplate.createPhotographerGallerie()
                );
            }
        });


        /* Intégration des likes des cartes et du prix correspondants au photographe */

        let hearthData = await this.photographersApi.getMedias();
        
        let hearthTotal = 0;  
        hearthData.forEach(hearth => {    
            if(hearth.photographerId == idURL) {
                hearthTotal = hearthTotal + hearth.likes;
            }
        });

        let HearthTemplate = new PhotographerHearth(hearthTotal);
        this.profilHearth.append(
            HearthTemplate.createHearth()
        )

        let priceData = await this.photographersApi.getPhotographers();
        priceData
            .map(price => new Photographers(price))
            .forEach(price => {
                const TemplatePrice = new PricePhotographer(price, idURL)
                this.profilPrice.append(TemplatePrice.createPrice());
        });
      


            /* Intégration du filter */

        let FilterTemplate = new FilterForm();
        this.filterFormWrapper.append(FilterTemplate.createFilter());

        const filterDatas = document.querySelectorAll('.photographerMedia');
        let tabTrie = [];
        
        for(let filter of filterDatas) {tabTrie.push(filter)}

        const filterSelect = document.querySelector('#filter-select');

        filterSelect.addEventListener("click", function() {

            switch (filterSelect.value) {
                case "popularite":
                    tabTrie.sort(function (a, b) {
                        return b.dataset.likes - a.dataset.likes;
                    });
                    break;
                case "date":
                    tabTrie.sort(function (a, b) {
                        return a.dataset.date.localeCompare(b.dataset.date,'fr', {ignorePunctuation: true});
                    });
                    break;
                case "titre":
                    tabTrie.sort(function (a, b) {
                        return a.dataset.titre.localeCompare(b.dataset.titre,'fr', {ignorePunctuation: true});
                    });
                    break;
                default:
                    "an error ocure"
                    break;
            }
            

            tabTrie.forEach(function (media) {
                document.querySelector(".photograph-media").append(media);
            });

            tabTrie
                .map(media => new Medias(media))
                //console.log(tabTrie);
                tabTrie.forEach(media => {
                    if (media._image) {
                        let MediaTemplate = new PhotographerImage(media, idURL, photographeName, this.hearth);
                        this.photographMedia.append(
                            MediaTemplate.createPhotographerGallerie()
                        );
                    } else if(media._video) {
                        let MediaTemplate = new PhotographerVideo(media, idURL, photographeName, this.hearth);
                        this.photographMedia.append(
                            MediaTemplate.createPhotographerGallerie()
                        );
                    }
                })
                let NvTabTrie = document.querySelectorAll(".photographerMedia")
                let i = 1;
                NvTabTrie.forEach(media => {
                    media.id = i;
                    media.firstElementChild.setAttribute('onclick',`openCarrousel(${i} , '${media.getAttribute("data-titre")}')`);
                    media.firstElementChild.setAttribute('onkeypress',`openCarrousel(${i} , '${media.getAttribute("data-titre")}')`);
                    media.firstElementChild.setAttribute('tabindex',`${i}`);
                    i++;
                })

        });


            /* Intégration du carrousel modale */

        let photoTotal = document.querySelectorAll('.photographerMedia_media');

        let CarrouselModaleTemplate = new CarrouselModale(photoTotal);
        this.carrouselModale.append(
            CarrouselModaleTemplate.createCarrouselModale()
        )

            /*  Intégration du contact modale */ 

        photographsid
            .map(photographer => new Photographers(photographer))
            .forEach(photographer => {
                const ContactModaleTemplate = new ContactForm(photographer, idURL);
                this.contactForm.append(
                    ContactModaleTemplate.createContactForm()
                );
            });
            let form = document.querySelector('.formContact')
            
            form.addEventListener('submit', (e) => {

                e.preventDefault();
                
                const prenom = document.querySelector("#prenom");
                const nom = document.querySelector("#nom");
                const email = document.querySelector("#email");
                const message = document.querySelector("#message");
                const validationSubmitError = document.querySelector("#validationSubmitError");
                
                if(inputsValidity.validateFirstTest == false || 
                    inputsValidity.validateLastTest == false|| 
                    inputsValidity.validateEmailTest == false|| 
                    inputsValidity.validateMessageTest == false)
                    {
                        e.preventDefault();
                        validationSubmitError.innerText = "Veuillez renseigner tous les champs";
                        return false;
                    }  else {
                        validationSubmitError.innerText = "";
                        console.log("prenom", prenom.value, "nom", nom.value, "email", email.value, "message", message.value);
                        alert("votre message à bien été envoyé");
                    } 
            
            })
    }
}

const photographer = new Photographer();
photographer.main()
