/***************************/
/* Ejercicios con el DOM: */
/**************************/
/*
- Crear tabla que contenga solo usuarios que tengan correo de Academlo (podemos usar método [endsWith](https://www.w3schools.com/jsref/jsref_endswith.asp))
- Crear una tabla que muestre a las personas en rango de 20 y 40 años
- Crear una tabla que contenga la información de todos los usuarios incluyendo sus redes sociales
*/

const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'daniela@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  }
]
let email ='';
for (let usuario of usuarios){
  if(usuario.correo.endsWith('@academlo.com')){
  email += `<li>${usuario.correo}</li>`
}
}
document.querySelector('#user-table-email').innerHTML = email;


let rango = '';
for (let usuario of usuarios){
  if (usuario.edad >= 20 && usuario.edad <= 40){
    rango += `<li>${usuario.nombre}</li>`
  }
}
document.querySelector('#user-table-range').innerHTML = rango;

let users = '';

for(let usuario of usuarios){
  users += `<li>${usuario.nombre} <br> edad ${usuario.edad} <br> correo${usuario.correo}
  redes ${usuario.social[0].url} <br> ${usuario.social[1].url}</li>`
}
document.querySelector('#user-table-info').innerHTML = users;