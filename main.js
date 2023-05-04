const formulario = document.querySelector('#formulario');
const borrarBtn = document.querySelector('#borrar');

borrarBtn.addEventListener('click',()=> {	
  borradoDeBase();    
});	

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

  let maxPersonas = 0;

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

  let personas = JSON.parse(localStorage.getItem('personas')) || [];

  if (personas.length >= maxPersonas) {
    alert(`Lo siento, ya se alcanzó el máximo de ${maxPersonas} personas para ${pais.toUpperCase()}.`);
    return;
  }

  const nuevaPersona = {
    nombre: nombre,
    edad: edad,
    pais: pais,
  };

  personas.push(nuevaPersona);

  localStorage.setItem('personas', JSON.stringify(personas));

  let nombres = JSON.parse(localStorage.getItem('nombres')) || [];
  nombres.push(nombre);
  localStorage.setItem('nombres', JSON.stringify(nombres));

  let edades = JSON.parse(localStorage.getItem('edades')) || [];
  edades.push(edad)
  
  let paises = JSON.parse(localStorage.getItem('paises')) || [];
  paises.push(pais)
    localStorage.setItem('paises', JSON.stringify(paises));


const borradoDeBase=()=>{
  localStorage.removeItem('nombres');
  localStorage.removeItem('edades');
  localStorage.removeItem('paises');
  };			
            
	formulario.reset();
	
  alert('¡Registro exitoso!');
   
});
