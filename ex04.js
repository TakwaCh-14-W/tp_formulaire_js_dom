function ajouterArticleBS() {
   inp = document.getElementById("articleBS");
   input = inp.value;
   li = document.createElement("li");
  // Classes Bootstrap : alignement flexbox , espacement et effet hover
  li.className =
    "list-group-item d-flex justify-content-between align-items-center list-group-item-action py-3 position-relative";

  li.innerHTML = `
    <span class="fw-semibold text-dark">${input}</span>
    <span class="badge bg-danger rounded-pill px-3 py-2" style="cursor: pointer;">
    <i class="bi bi-trash"></i> Supprimer
    </span>
    `;

  sup = li.querySelector(".badge");
  sup.onclick = function () {
    li.remove();
  };

  listeBS = document.getElementById("listeBS");
  listeBS.prepend(li);

  inp.value = "";
  inp.focus();
}
