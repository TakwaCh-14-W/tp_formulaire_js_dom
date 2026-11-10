function ajouterArticle() {
    inp = document.getElementById("nouvelArticle");
    // yelmnich na3ml direct .value
    input = inp.value
    if (input == "") {
        alert("Saisie Obligatoire !!!");
        return;
    }

    li = document.createElement("li")
    // yelzmnich na3ml DIRECT B textcontent 3l createElement
    li.textContent = input

    li.onclick = function() {
        this.remove(); // Supprime directement le noeud clique
    };

    const liste = document.getElementById("listeDynamique");
    liste.append(li);

    inp.value = ""; 
    // bch narja3 hne l asel input te3i
    inp.focus();    
}
