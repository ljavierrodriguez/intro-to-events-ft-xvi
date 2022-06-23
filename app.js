function saludo() {
    alert('Hola como estan?');
}

const saludo2 = () => {
    alert('Hola desde saludo 2')
}

const saludo3 = function () {
    let respuesta = confirm('Desesas saludar?');
    console.log(respuesta);
    let nombre = prompt('Saludo', 'ingrese nombre');
    console.log(nombre);
}

let box = document.querySelectorAll('.box')[1];

box.addEventListener('click', function () {
    let respuesta = confirm('Desesas saludar?');
    console.log(respuesta);
    let nombre = prompt('Saludo', 'ingrese nombre');
    console.log(nombre);
})

box.onclick = operaciones;

// hoisting
function operaciones() {
    let respuesta = confirm('Desesas saludar?');
    console.log(respuesta);
    let nombre = prompt('Saludo', 'ingrese nombre');
    console.log(nombre);
}

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerHTML = "4";
ul.appendChild(li);

let elementsLI = document.querySelectorAll('li');
elementsLI.forEach((li) => {
    li.addEventListener('mouseover', () => {
        li.style.backgroundColor = 'red';
    })
    li.addEventListener('mouseout', () => {
        li.style.backgroundColor = 'transparent';
    })
})


let inputName = document.querySelector('#name');
inputName.addEventListener('keyup', function (evento) {
    console.log(evento.target.value);
})


let form = document.querySelector('form');
/* 
form.onsubmit = function(evento){
    evento.preventDefault();

} */



form.addEventListener('submit', (e) => {
    e.preventDefault();

    let { name, lastname } = form;
    let variables = {};
    variables['name'] = name.value;
    variables['lastname'] = lastname.value;

    variables.name = name.value;
    variables.lastname = lastname.value;

    console.log(variables);

    console.log(form.name.value);
    console.log(form.lastname.value);
})
