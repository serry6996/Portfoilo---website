(()=>{
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#email");
    let telInput = document.querySelector("#tel");
    let messageInput = document.querySelector("#message")


    function showErrorMessage(input,message){
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
          container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail (){
        let value = emailInput.value;
        if(!value){
            showErrorMessage(emailInput,'Please enter your E-mail.')
            return false;
        }

        if(value.indexOf('@')=== -1 ){
            showErrorMessage(emailInput,"Please enter a valid E-mail address");
            return false;
        }
        if(value.indexOf('.')=== -1){
            showErrorMessage(emailInput,"Please enter a valid E-mail address");
            return false;
        }

        showErrorMessage(emailInput,null)
        return true;
    }

    function validateTel(){
        let value = telInput.value;

        if(!value){
            showErrorMessage(telInput,'Please Enter your Phone number.');
            return false;
        }
        if(!/^\d+$/.test(value)){
            showErrorMessage(telInput,'Please Enter a valide phone number')
            return false
        }
        if(value.length < 8 || value.length > 12){
            showErrorMessage(telInput,'please Enter a valide phone number')
            return false;
        }
        showErrorMessage(telInput,null)
        return true;
    }

    function validateMessage (){
        let value = messageInput.value;

        if(!value){
            showErrorMessage(messageInput,"Please Enter your iquiries and i will contact you!")
            return false;
        }

        showErrorMessage(emailInput,null);
        return true;
    }

    function validateForm (){
        let isValidEmail = validateEmail();
        let isValidTel = validateTel();
        let isvalidMessage = validateMessage();

        return isValidEmail && isValidTel && isvalidMessage;
    }

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(validateForm()){
           showModal();
        }
    })

    emailInput.addEventListener('input',validateEmail);
    telInput.addEventListener('input', validateTel);
    

    function showModal(){

        console.log('show moddasdal');
        let container = document.querySelector('#modal-container');
         // Clear the container to remove any existing modals
        container.innerHTML = '';
       
    
        let modal = document.createElement('div');
        modal.classList.add('modal');
        container.appendChild(modal);
    
        let sucessMessage = document.createElement('h1');
        sucessMessage.innerText = "Submitted Successfully Thank You!";
        modal.appendChild(sucessMessage);
    
        let doneButton = document.createElement('button')
        modal.appendChild(doneButton);
        doneButton.innerText= "Done";
    
        container.classList.add('is-visible');
    
        doneButton.addEventListener('click',hideModal);
 
        
    }
    
    function hideModal(){
        let container = document.querySelector("#modal-container");
        if (container.classList.contains('is-visible')){
            container.classList.remove('is-visible');
        };
    }
 
    
  
    



})();

