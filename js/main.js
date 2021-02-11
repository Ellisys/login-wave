var signIn = document.getElementById("btnSignInCad");
var signUp = document.getElementById("btnSignUp");
var signUpBlock = document.getElementById("campo2");
signIn.addEventListener("click", ()=>{
    
})

signUp.addEventListener("click", ()=>{

    if(window.screen.availWidth < 768){
        signUpBlock.style.bottom = "140px";
    }

    if(window.screen.availWidth >= 768){
        signUpBlock.style.bottom = "220px";
    }

    if(window.screen.availWidth >= 1024){
        signUpBlock.style.bottom = "160px";
    }
    
    if(window.screen.availWidth >= 1440){
        signUpBlock.style.bottom = "328px";
    }

    

})

signIn.addEventListener("click", ()=>{
    signUpBlock.style.transition = "2s";
    signUpBlock.style.bottom = "-328px";
})

console.log(window.screen.availWidth)