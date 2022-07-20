
let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        confirmEmail: form.confirmEmail.value,
        code: form.code.value,
        phone: form.phone.value,
        password: form.password.value,
        confirmPassword: form.confirmPassword.value
    }
    if(data.email == data.confirmEmail && data.password === data.confirmPassword){
        if(checkEmail(data.email)===true){
            alert("Account created Successfully");
            userData.push(data);
            console.log(userData);
            localStorage.setItem("userData",JSON.stringify(userData));

        }
        else{
            alert("Account Already Exists")
            
        }
    }
    else{
        alert("check Your Email or Password");
    }
    
})

let checkEmail = (email)=>{
    let filteredEmail = userData.filter((ele)=>{
        return email == ele.email;
    })
    if(filteredEmail.length>0){
        return false;
    }
    else{
        return true;
    }
}