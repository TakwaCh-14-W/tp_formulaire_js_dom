document.getElementById("titre-catalogue").textContent="ISET Charguia - Catalogue Ociel"

document.querySelector(".article.urgent").style.color="red"
document.querySelector(".article.urgent").style.backgroundColor = "lightyellow"

article = document.querySelectorAll(".article")
for (let i of article) {
    console.log(i.textContent)
}

startart = document.getElementsByName("statutArticle")
for (let i of startart) {
    console.log(i.value)
}

const liste = document.getElementById("liste-articles");

const premier = liste.firstElementChild;
console.log(premier.textContent);

const dernier = liste.lastElementChild;

const suivant = premier.nextElementSibling;
console.log(suivant.textContent);

const precedent = dernier.previousElementSibling;
console.log(precedent.textContent);
