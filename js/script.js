const countdownElement = document.getElementById('countdown');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const myAudio = document.getElementById('myAudio');

// Fecha de cuenta atrás (ajusta según tus necesidades)
const countDownDate = new Date("January 08, 2025 20:00:00").getTime();

// Contraseña fija (cambia esto por la contraseña deseada)
const fixedPassword = "Te amo";

// URL de redirección (cambia esto por la URL de tu página de destino)
const redirectUrl = "https://sites.google.com/view/primer-mes-/p%C3%A1gina-principal";

// Actualiza la cuenta atrás cada segundo
setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calcula días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra la cuenta atrás en el elemento HTML
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Maneja el envío del formulario
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (passwordInput.value === fixedPassword) {
    // Redirige a la página de destino
    window.open(redirectUrl, '_blank');

    // Reproduce la canción
    myAudio.play();
  } else {
    alert('Contraseña incorrecta');
  }
});
