const projectContainer = document.querySelector("#project-container");
let projectTitle = document.getElementById("title-project");
let imageLink = document.getElementById("image-link");
let projectDescription = document.querySelector("textarea");
const btn = document.querySelector('input[type="submit"]');

// logique
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    projectTitle.value != "" &&
    imageLink.value != "" &&
    projectDescription != ""
  ) {
    // créer les élements
    let cardProject = document.createElement("div");
    let newTitle = document.createElement("h2");
    let linkImg = document.createElement("img");
    let descript = document.createElement("p");
    // ajouter la card au container
    projectContainer.appendChild(cardProject);
    cardProject.classList.add("project-card");
    // ajouter le titre
    cardProject.appendChild(newTitle);
    newTitle.id = "project-title";
    newTitle.textContent = projectTitle.value;
    // ajouter le lien de l'image
    cardProject.appendChild(linkImg);
    linkImg.src = imageLink.value;
    linkImg.alt = projectTitle.value;
    // ajouter la description
    cardProject.appendChild(descript);
    descript.classList.add("project-description");
    descript.textContent = projectDescription.value;

    projectTitle.value = "";
    imageLink.value = "";
    projectDescription.value = "";
  } else {
    alert("Veuillez tout bien remplir svp !");
  }
});
