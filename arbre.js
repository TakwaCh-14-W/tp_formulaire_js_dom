// Création d'un noeud :
const form = document.createElement("form")
// ajout d'un attribut :  
// form.setAttribute("action","affiche.php")
form.setAttribute("method","POST")
// Oub bien ajout d'un attribut peut se faire par :
form.action = "affiche.php"
// form.method= "POST" 
const input1 = document.createElement("input")
input1.setAttribute("type", "text");

const input2 = document.createElement("input");
input2.setAttribute("type", "checkbox");
const label = document.createElement("label")
label.setAttribute("for", "ch")
label.textContent = "cocher"

const select = document.createElement("select");
const option1 = document.createElement("option");
option1.textContent = "IOT";
const option2 = document.createElement("option");
option2.textContent = "Cyber";
select.append(option1, option2);

const br1 = document.createElement("br")
const br2 = document.createElement("br")
const br3 = document.createElement("br")

const button = document.createElement("button")
button.textContent = "Envoyer";

// form.append(input1,br2, input2 , label, br1, select ,br3 , button); 
form.append(input1,br2, input2 , label, br1, select ,br3 ); 
br3.after(button); 
// w famma before
// w remove

const h1 = document.createElement("h1")
h1.textContent = "h1 prepend";
form.prepend(h1)


const p = document.createElement("p");
p.textContent = "votre filière est ";

const span = document.createElement("span");
span.textContent = "votre campus";


// Insertino etape finale dans le body
document.body.append(form, p, span);