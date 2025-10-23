document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    var form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          // Effacer les champs du formulaire
          form.reset();

          // Masquer le formulaire
          form.style.display = "none";

          // Afficher le message de confirmation
          document.getElementById("form-response").style.display = "block";
        } else {
          alert("❌ Une erreur est survenue. Réessaie plus tard.");
        }
      })
      .catch(() => {
        alert("⚠️ Problème de connexion.");
      });
  });
