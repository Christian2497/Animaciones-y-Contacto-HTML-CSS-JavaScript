'use strict';


class Validator {
  constructor() {
    // mensajes predeterminados
    this.invalidNameError = 'Por favor rellena el campo nombre';
    this.invalidEmailError = 'Por favor escribe un email valido';

    // objeto con los errores que vamos a mostrar al usuario
    this.errors = {
        invalidNameError: this.invalidNameError,
        invalidEmailError: this.invalidEmailError,
    }
  }

  validateValidEmail = (email) => {
    // si el email es valido, quita el mensaje de error
    if (this.emailIsValid(email)) {
      delete this.errors.invalidEmailError;
    }
    else {
      // si el email no es valido, poner el mensaje que se mostrara
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  }

  // funcion auxiliar de `validateEmail`
  emailIsValid = (email) => {
    // RegEx objeto special - contiene las reglas de la sintaxis
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    // metodo `test` prueba si la cadena cumple las reglas
    // y devuelve `true` o `false`
    const isValid = emailRegEx.test(email);
    
    return isValid;      
  }

  validateValidName = (name) => {
    // si el email es valido, quita el mensaje de error
    if (this.nameIsValid) {
      delete this.errors.invalidNameError;
    }
    else {
      // si el email no es valido, poner el mensaje que se mostrara
      this.errors.invalidNameError = this.invalidNameError;
    }
  }

  nameIsValid = (name) => {
      if(name.length > 0){
        delete this.errors.invalidNameError
      } else{
          this.errors.invalidNameError = this.invalidNameError
      }
  }

  getErrors = () => {
    return this.errors;
  }

  // reiniciar los errores mostrados, para el proximo Signup
  resetValidator = () => {
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
    }
  }

}