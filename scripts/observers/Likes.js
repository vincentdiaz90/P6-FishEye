/** Système de like **/
function systemeLike(id, type) {
    /* Récupuère les éléments */
    let nbLike = document.querySelector("#like-" + id).innerHTML;
    nbLike = parseInt(nbLike);
        //console.log(nbLike);
    let nbLikeTotal = document.querySelector(".photographerNbHearths").innerHTML;
    nbLikeTotal = parseInt(nbLikeTotal);
        //console.log(nbLikeTotal);

    /* Gère le like */
    if (type == "like") {
        nbLike = nbLike + 1;
        nbLikeTotal = nbLikeTotal + 1;
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("hearth")[0].style.color = "#db8876";
        /* Change la fonction */
        document.querySelector(".like-" + id).querySelector(".hearth").querySelector("i").setAttribute("onclick", "systemeLike('" + id + "', 'unlike')");
    } else {
        nbLike = nbLike - 1;
        nbLikeTotal = nbLikeTotal - 1;
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("hearth")[0].style.color = "#000";
        /* Change la fonction */
        document.querySelector(".like-" + id).querySelector(".hearth").querySelector("i").setAttribute("onclick", "systemeLike('" + id + "', 'like')");
    }
    /* Change dans les éléments */
    document.getElementById("like-" + id).innerHTML = nbLike;
    document.querySelector(".photographerNbHearths").innerHTML = nbLikeTotal;
}