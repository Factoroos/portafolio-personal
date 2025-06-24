// Esperar a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {
  // ----- Mostrar proyectos del sistema CRUD -----
  const contenedor = document.getElementById("proyectos-dinamicos");

  if (contenedor) {
    fetch("https://teclab.uct.cl/~jorge.sepulveda/proyecto_final/api/proyectos.php")
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          contenedor.innerHTML = "<p>Error al cargar proyectos.</p>";
          return;
        }

        data.forEach(proyecto => {
          const card = document.createElement("article");
          card.classList.add("project");

          card.innerHTML = `
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <p><strong>GitHub:</strong> <a href="${proyecto.url_github}" target="_blank">Ver repositorio</a></p>
            <p><strong>Producción:</strong> <a href="${proyecto.url_produccion}" target="_blank">Ver en línea</a></p>
            <img src="https://teclab.uct.cl/~jorge.sepulveda/proyecto_final/uploads/${proyecto.imagen}" alt="${proyecto.titulo}" style="max-width:100%; margin-top:10px;">
          `;
          contenedor.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Error cargando proyectos:", err);
        contenedor.innerHTML = "<p>Error al cargar proyectos.</p>";
      });
  }

  // ----- Validación del formulario de contacto -----
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const formMessage = document.getElementById('formMessage');

      formMessage.classList.remove('hidden');
      formMessage.textContent = '';
      formMessage.style.color = '';

      // Validación simple
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formMessage.textContent = 'Por favor completa todos los campos.';
        formMessage.style.color = 'red';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        formMessage.textContent = 'Correo electrónico no válido.';
        formMessage.style.color = 'red';
        return;
      }

      formMessage.textContent = '¡Mensaje enviado correctamente!';
      formMessage.style.color = 'green';
      this.reset();
    });
  }
});
