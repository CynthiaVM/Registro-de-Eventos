
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import './style.css'

console.log('Hollaa!!');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  alert('Holaaa');
});

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const edad = document.querySelector('#edad').value;
  const pais = document.querySelector('#pais').value;

  if (nombre === '' || edad === '' || pais === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (edad < 18) {
    alert('Debes ser mayor 18 años para registrarte.');
    return;
  }

  let maxPersonas;
  switch (pais) {
    case 'arg':
      maxPersonas = 50;
      break;
    case 'chi':
      maxPersonas = 60;
      break;
    case 'uru':
      maxPersonas = 70;
      break;
    default:
      alert('Selecciona un país válido.');
      return;
  }

  if (localStorage.getItem('personas') === null) {
    localStorage.setItem('personas', '[]');
  }

  const personas = JSON.parse(localStorage.getItem('personas'));

  if (personas.length >= maxPersonas) {
    alert(`Lo siento, ya se alcanzó el máximo de ${maxPersonas} personas para ${pais.toUpperCase()}.`);
    return;
  }

  const persona = {
    nombre: nombre,
    edad: edad,
    pais: pais,
  };

  personas.push(persona);

  localStorage.setItem('personas', JSON.stringify(personas));
  cargarTareas();
	formulario.reset();
	Toastify({
		text: `La tarea con nombre ${tarea} se cargo correctamente.`,
		className: 'info',
	}).showToast()

  alert('¡Registro exitoso!');
});
