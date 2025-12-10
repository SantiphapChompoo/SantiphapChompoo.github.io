const password = '110868';
const error = document.getElementById('Error');

function login(){
    const passwordinput = document.getElementById('password').value;
    if(passwordinput === password){
        window.location.href = "home.html";
    }
    else {
        alert("ผิดดดด")
    }
};