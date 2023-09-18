var input = document.querySelector('input[type=password]')
var eyeopen = document.querySelector('.fa-eye')
var eyeclose = document.querySelector('.fa-eye-slash')

eyeopen.onclick = function(){
    eyeopen.classList.add("hidden2");
    eyeclose.classList.remove("hidden2");
    input.setAttribute("type","text");
}
eyeclose.onclick = function(){
    eyeclose.classList.add("hidden2");
    eyeopen.classList.remove("hidden2");
    input.setAttribute("type","password");
}

function onclickLogin(){
    var form = document.querySelector('.form_login')
    var inputs = document.querySelectorAll('.form_login input');
    var errors = document.querySelectorAll('.error');
    console.log(inputs);
    for(var i =0; i< inputs.length; i++){
        var val = inputs[i].value;
        if(inputs[i].getAttribute("type") == 'email'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Email';
            }
        }else if(inputs[i].getAttribute("type") == 'password'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Password';
            }
        }
        
        
    }
    
    inputs[0].oninput = function(){
            errors[0].innerText= '';
        
    }
    inputs[1].oninput = function(){
        errors[1].innerText= '';
    
    }
   
    
}
