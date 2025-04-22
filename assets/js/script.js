document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');
  
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      formMessage.textContent = 'Por favor completa todos los campos.';
      formMessage.style.color = 'red';
      formMessage.classList.remove('hidden');
      return;
    }
  
    if (!email.value.includes('@') || !email.value.includes('.')) {
      formMessage.textContent = 'Correo electrónico no válido.';
      formMessage.style.color = 'red';
      formMessage.classList.remove('hidden');
      return;
    }
  
    formMessage.textContent = '¡Mensaje enviado correctamente!';
    formMessage.style.color = 'green';
    formMessage.classList.remove('hidden');
  
    // Resetear formulario
    this.reset();
  });
  