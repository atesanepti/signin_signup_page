let passwordArea = document.querySelector(".password")
let passwordInput = passwordArea.querySelector("#password") 
let passwordCheck = passwordArea.querySelector(".passwordShow #passwordShow")

passwordCheck.addEventListener("change",(e)=>{
    if (e.target.checked){
        if (passwordInput.type == 'password'){
            passwordInput.type = 'text'
        }
    }
    else{
        if (passwordInput.type == 'text'){
            passwordInput.type = 'password'
        }
    }
})



