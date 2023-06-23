let submitButton = document.getElementById('sub');
const passValue = document.getElementById('password');
const actualPassValue = document.getElementById('confirm_passw');

submitButton.onclick = () =>{
    if(passValue.value !== actualPassValue.value){
        alert('please enter the same pass in both');
        return false;

        }
        
}



