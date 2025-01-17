
var signupNameInput = document.querySelector('#signupName');
var signupEmailInput = document.querySelector('#signupEmail');
var signupPassInput = document.querySelector('#signupPass');

var signupBtn = document.querySelector('#signupBtn');


var userInfo;


if(localStorage.getItem('userInformation') !==null){
    userInfo = JSON.parse(localStorage.getItem('userInformation'));
} else{
    var userInfo =[];
}

function isEmailExist() {
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].signupEmail.toLowerCase() == signupEmailInput.value.toLowerCase()) {
            return false
        }
        else{
            return true
        }
    }
}

function validateName(name) {
    return /^[a-zA-Z\s]{3,}$/.test(name); 
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

function validatePassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password); 
}



function signup(){
    
    if(signupNameInput.value == "" || signupEmailInput.value == "" || signupPassInput.value == ""){
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    
    if (!validateName(signupNameInput.value)) {
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">Name should be at least 3 characters long and contain only letters and spaces.</span>';
        return false;
    }

  
    if (!validateEmail(signupEmailInput.value)) {
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">Invalid email format.</span>';
        return false;
    }


    if (!validatePassword(signupPassInput.value)) {
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">Password should be at least 6 characters long and contain at least one letter and one number.</span>';
        return false;
    }



    var client = {
        signupName :  signupNameInput.value,
        signupEmail : signupEmailInput.value,
        signupPass : signupPassInput.value,
    }
    

    if (userInfo.length == 0) {
                userInfo.push(client)
                localStorage.setItem('userInformation', JSON.stringify(userInfo))
                document.getElementById('present').innerHTML = '<span class="text-success m-3">Success</span>'
                return true
            }

    if (isEmailExist() == false) {
    document.getElementById('present').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        
} else {
    userInfo.push(client)
    localStorage.setItem('userInformation', JSON.stringify(userInfo))
    document.getElementById('present').innerHTML = '<span class="text-success m-3">Success</span>'
    }
    
    
}
signupBtn.addEventListener('click' , signup);
