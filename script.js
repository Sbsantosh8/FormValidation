var nameError  = document.getElementById("name-error");
var phoneError  = document.getElementById("phone-error");
var emailError  = document.getElementById("email-error");
var messageError  = document.getElementById("message-error");
var submitError  = document.getElementById("submit-error");



function validateName(){
    var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
}
nameError.innerHTML = 'valid';

return true;
}
 

function validatePhone(){

    var phone = document.getElementById("contact-phone").value;

    if(phone.length !== 10){
        phoneError.innerHTML = "Phone Number is required";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){

        phoneError.innerHTML = "Only digits please";

    }

    phoneError.innerHTML = 'valid'
    return true;

}


function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        emailError.innerHTML = "Email is Invalid";
        return false;
    }
    
    emailError.innerHTML = "valid";
    return true;
}


function validateMessage(){
    var message = document.getElementById("contact-message").value;

    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + " more characters required";
        return false;
    }

    messageError.innerHTML = "valid"
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please enter fields properly to Submit";
        setTimeout(function(){ submitError.style.display = "none";},3000);
        return false;
    }
}