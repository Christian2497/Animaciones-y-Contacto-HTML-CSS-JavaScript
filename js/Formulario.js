"use strict";

var nombre = document.getElementById('name');
var email = document.getElementById('email');
var terms = document.getElementById('terms');
var error = document.getElementById('error');
var exito = document.getElementById('exito');


function enviarFormulario(){
    var mensajesError = [];
    var mensajesExito = [];

    if(nombre.value === "" || nombre.value === null){
        mensajesError.push('Por favor rellena el campo nombre')
    }

    if(email.value === "" || email.value === null){
        mensajesError.push('Por favor escribe un email valido')
    }
    
    if(terms.checked != true){
        mensajesError.push('Hay que aceptar las condiciones')
    }

    if(!mensajesError){
        mensajesExito.push("Hi " +nombre)
    }
    error.innerHTML = mensajesError.join(', ');
    exito.innerHTML = mensajesExito.join(', ');

    return false;
}