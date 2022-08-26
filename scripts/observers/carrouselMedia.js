const mediaCarrousel = document.querySelectorAll(".photographerMedia_media");

let idPhoto;
let isDeclared = false;

mediaCarrousel.forEach(element => {
    element.addEventListener('click', openCarrousel())
});

function data(titre){

    const contSlides = document.querySelector('.cont-slides');

    let tabPhoto = document.querySelectorAll(".photographerMedia_media");

    let photos = document.getElementById(idPhoto + 1)

    let photosSrc = photos.querySelectorAll(".src-contenu")[0].getAttribute("src");

    let photoType = photosSrc.split('.').pop();

    let photoFormat = "";
    if (photoType === "jpg" || photoType === "jpeg" || photoType == "gif" || photoType === "png") {
        photoFormat = "image";

    } else if (photoType === "mp4" || photoType === "mkv" || photoType === "avi") {
        photoFormat = "video";

    }
    if (photoFormat === "image") {
        contSlides.innerHTML = "<img alt='" + titre + "' id='photo-lightbox' src=" + photosSrc + ">";
        document.querySelector(".name-media p").innerText = tabPhoto[idPhoto].alt;
            
    } else {
        contSlides.innerHTML = "<video title='" + titre + "' class='cont-slides-media' controls><source src=" + photosSrc + "></source></video>";
        document.querySelector(".name-media p").innerText = tabPhoto[idPhoto].getAttribute('aria-label');
        
    }
}



function openCarrousel(index, titre){

    const carrouselModale = document.querySelector('.carrousel-modale');
    const contSlides = document.querySelector('.cont-slides');

    carrouselModale.classList.add('activeModale');

    /* Récupère la photo lié à l'index */
    let photos = document.getElementById(index);
    //console.log('index',index);

    /* Obtient la source de l'image */
    let photosSrc = photos.querySelectorAll(".src-contenu")[0].getAttribute("src");
    //console.log(photosSrc)

     /* Obtient le type de l'image */
     let photoType = photosSrc.split('.').pop();
     let photoFormat = "";
     if (photoType === "jpg" || photoType === "jpeg" || photoType == "gif" || photoType === "png") {
         photoFormat = "image";
     } else if (photoType === "mp4" || photoType === "mkv" || photoType === "avi") {
         photoFormat = "video";
     }

    /* Récupère l'id de la photo */
    idPhoto = index - 1;

    /* Affiche la photo */

    if (photoFormat === "image") {
        contSlides.innerHTML = "";
        contSlides.innerHTML = "<img alt='" + titre + "' id='photo-lightbox' src=" + photosSrc + ">";
    } else {
        contSlides.innerHTML = "";
        contSlides.innerHTML = "<video title='" + titre + "' class='cont-slides-media' controls><source src=" + photosSrc + "></source></video>";
    }

    /** Affiche le titre */
    document.querySelector(".name-media p").innerText = titre;


    /** Appel des fonction qui gère la fleche de droite et de gache */
    if(isDeclared == false) {

        const suivant = document.querySelector('.right');
        suivant.addEventListener('click', function() {
            slideSuivante(idPhoto);
        })
        
        const precedent = document.querySelector('.left');
        precedent.addEventListener('click', function() {
            slidePrecedente(idPhoto);
        })
        isDeclared = true;
    }

}



    /* Fermeture du carrousel */

function closeCarrousel() {

    const carrouselModale = document.querySelector('.carrousel-modale');

    carrouselModale.classList.remove('activeModale');
}


    /* Gère la flèche droite */

function slideSuivante(){

        //console.log(idPhoto);

    let totalPhoto = document.querySelectorAll(".photographerMedia_media").length;

    let tabPhoto = document.querySelectorAll(".photographerMedia_media");

    if(idPhoto < totalPhoto - 1){

        tabPhoto[idPhoto].classList.remove('active');
        idPhoto++;
        data()
        tabPhoto[idPhoto].classList.add('active');

    }
    else if (idPhoto === totalPhoto -1) {

        tabPhoto[idPhoto].classList.remove('active');
        idPhoto = 0;
        data()
        tabPhoto[idPhoto].classList.add('active');

    }
    
}

        /* Gère la flèche gauche */

function slidePrecedente(){

    let totalPhoto = document.querySelectorAll(".photographerMedia_media").length;
    let tabPhoto = document.querySelectorAll(".photographerMedia_media");

    if(idPhoto > 0){

        tabPhoto[idPhoto].classList.remove('active');
        idPhoto--;
        data()
        tabPhoto[idPhoto].classList.add('active');

    }
    else if (idPhoto === 0) {

        tabPhoto[idPhoto].classList.remove('active');
        idPhoto = totalPhoto - 1;
        data()
        tabPhoto[idPhoto].classList.add('active');

    }
}


    /* Gère les touches du clavier */


document.addEventListener('keydown', keyPressed)

function keyPressed(e){

    if(e.keyCode === 37){
        slidePrecedente();
    } 
    else if (e.keyCode === 39) {
        slideSuivante();
    }

    else if(e.keyCode === 27){
        closeCarrousel();
    }
}





