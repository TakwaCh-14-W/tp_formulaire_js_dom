function executerAction() {
  inp = document.getElementById("nomEtudiant");
  input= inp.value
  if (input == "") {
    alert("Saisie Obligatoire !!!! ");
    return;
  }
  li = document.createElement("li");
  li.textContent = input;
  fileAttente = document.getElementById("fileAttente");
  cible = document.getElementById("etud-cible");
  r = document.getElementsByName("actionDOM");
  if (r[0].checked) {
    fileAttente.prepend(li);
  } else if (r[1].checked) {
    fileAttente.append(li);
  } else if (r[2].checked) {
    cible.before(li);
  } else if (r[3].checked) {
    cible.after(li);
  } else if (r[4].checked) {
    cible.replaceWith(li);
  }
  inp.value = "";
  inp.focus();
}

function reinitialiserFile() {
  document.getElementById("fileAttente").replaceChildren();
}
