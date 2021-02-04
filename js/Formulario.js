"use strict";

class Login{
    constructor(){
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.termsInput = document.querySelector("#terms");
        this.sendButton = document.querySelector("#send");
        this.messageContainer = document.querySelector(".message-container")
    }

    handleEmailInput = (event) => {
        const email = event.target.value;
    
        validator.validateValidEmail(email);
    
        const errorsObj = validator.getErrors();
    
        if(!errorsObj.invalidEmailError){
            validator.validateUniqueEmail(email)
        }
    
    
        this.setErrorMessages();
        this.checkButton();
    }

}