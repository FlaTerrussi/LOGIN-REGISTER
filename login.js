document.getElementById('CreateAccount').addEventListener('click', Register);
document.getElementById('SignIn').addEventListener('click', Form);

var Div1 = document.querySelector("#div1");
var Div2 = document.querySelector("#div2");
var FormLogin = document.querySelector("#form__login");
var FormRegister = document.querySelector("#form__register");
var Login = document.querySelector('#register__message-signup');
var Register = document.querySelector("#register__message-register");





function Register () {

    if(window.innerWidth > 850) {
        FormLogin.classList.add('form--hidden');
        FormRegister.classList.remove('form--hidden');
        Register.classList.add('form--hidden');
        Login.classList.remove('form--hidden');

        Div2.style.transition = 'transform .5s';

        Div2.style.transform = 'translatex(-320px)';
        Div2.style.borderBottomLeftRadius = '1.5%';
        Div2.style.borderTopLeftRadius = '1.5%';
    
        Div2.style.borderBottomRightRadius = '0px';
        Div2.style.borderTopRightRadius = '0px';

        Div1.style.transform = 'translatex(450px)';
        Div1.style.borderBottomRightRadius = '1.5%';
        Div1.style.borderTopRightRadius = '1.5%';
        Div1.style.transition = 'transform .5s';

        Div1.style.borderBottomLeftRadius = '0%';
        Div1.style.borderTopLeftRadius = '0%';


    }else {
        FormLogin.classList.add('form--hidden');
        FormRegister.classList.remove('form--hidden');
        Register.classList.add('form--hidden');
        Login.classList.remove('form--hidden');

        Div2.style.transition = 'transform .5s';

        Div1.style.borderBottomRightRadius = '0%';
        Div1.style.borderTopRightRadius = '1.5%';        
        Div1.style.borderBottomLeftRadius = '0%';
        Div1.style.borderTopLeftRadius = '1.5%';

        Div2.style.borderBottomLeftRadius = '1.5%';
        Div2.style.borderTopLeftRadius = '0%';
        Div2.style.borderBottomRightRadius = '1.5%';
        Div2.style.borderTopRightRadius = '0%';

    }

};

function Form () {

    if(window.innerWidth > 850) {
        FormLogin.classList.remove('form--hidden');
        FormRegister.classList.add('form--hidden');
        Register.classList.remove('form--hidden');
        Login.classList.add('form--hidden');
    
        Div2.style.transform = 'translatex(0px)';
        Div2.style.borderBottomLeftRadius = '0%';
        Div2.style.borderTopLeftRadius = '0%';
        Div2.style.transition = 'transform .5s';
        Div2.style.borderBottomRightRadius = '1.5%';
        Div2.style.borderTopRightRadius = '1.5%';
    
        Div1.style.transform = 'translatex(0px)';
        Div1.style.borderBottomRightRadius = '0%';
        Div1.style.borderTopRightRadius = '0%';
        Div1.style.transition = 'transform .5s';
    
        Div1.style.borderBottomLeftRadius = '1.5%';
        Div1.style.borderTopLeftRadius = '1.5%';
    

    }else{
        FormLogin.classList.remove('form--hidden');
        FormRegister.classList.add('form--hidden');
        Register.classList.remove('form--hidden');
        Login.classList.add('form--hidden');
    
        
        Div2.style.transition = 'transform .5s';

        Div1.style.borderBottomRightRadius = '0%';
        Div1.style.borderTopRightRadius = '1.5%';        
        Div1.style.borderBottomLeftRadius = '0%';
        Div1.style.borderTopLeftRadius = '1.5%';

        Div2.style.borderBottomLeftRadius = '1.5%';
        Div2.style.borderTopLeftRadius = '0%';
        Div2.style.borderBottomRightRadius = '1.5%';
        Div2.style.borderTopRightRadius = '0%';
       
        
    }

};


// INPUT ERROR







