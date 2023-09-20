function onclickRegister(){
    var form = document.querySelector('.form_login')
    var inputs = document.querySelectorAll('.form_login input');
    var errors = document.querySelectorAll('.error');
    console.log(inputs);
    for(var i =0; i< inputs.length; i++){
        
        if(inputs[i].getAttribute("type") == 'text'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Name';
            }
        }else if(inputs[i].getAttribute("id") == 'password'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Password';
            }
        }else if(inputs[i].getAttribute("id") == 're-password'){
            if(inputs[i].value == ''){
                errors[i].innerText= 'Re-Password';

            }}
            else if(inputs[i].getAttribute("type") == 'email'){
                if(inputs[i].value == ''){
                    errors[i].innerText= 'Email';
                }
            }
        
        
    }
    inputs[0].oninput = function(){
        errors[0].innerText= '';
    
    }
    inputs[1].oninput = function(){
        errors[1].innerText= '';

    }
    inputs[2].oninput = function(){
        errors[2].innerText= '';

    }
    inputs[3].oninput = function(){
        errors[3].innerText= '';

    }
   
    

    
}