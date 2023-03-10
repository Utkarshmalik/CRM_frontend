const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const getUsersButton = document.getElementById("users");


registerButton.addEventListener("click", onRegister);
loginButton.addEventListener("click", onLogin);
getUsersButton.addEventListener("click", getAllUsers);


function onRegister(){

    const userDetails = {
        name:"Nehal",
        userId:"nehal1234",
        email:"nehalahmedansari0101@gmail.com",
        password:"qwerty1234"
    }

    fetch("https://crm-application-zysm.onrender.com/crm/api/v1/auth/signup",{
     method:"POST",
     headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(userDetails)
     })
     .then(data=>data.json())
     .then(res=>{
     })
     .catch(err=>{
        console.log(err);
     })

}



function onLogin(){

    const userDetails = {
        userId:"admin",
        password:"admin"
    }

    fetch("https://crm-application-zysm.onrender.com/crm/api/v1/auth/signin",{
     method:"POST",
     headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(userDetails)
     })
     .then(data=>data.json())
     .then(res=>{
        localStorage.setItem("accessToken",res.accessToken);
     })
     .catch(err=>{
        console.log(err);
     })

}

function getAllUsers(){


    fetch("https://crm-application-zysm.onrender.com/crm/api/v1/users",{
     method:"GET",
     headers: {
        "x-access-token": localStorage.getItem("accessToken")
      }
     })
     .then(data=>data.json())
     .then(res=>{
        console.log(res);
     })
     .catch(err=>{
        console.log(err);
     })

}