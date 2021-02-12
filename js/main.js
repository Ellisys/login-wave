var signIn = document.getElementById("btnSignInCad");
var signUp = document.getElementById("btnSignUp");
var signUpBlock = document.getElementById("campo2");
var teste = document.getElementById("confirmEmail");
var initial_screen_size = window.innerHeight;
var mobileKeyboard = false;
var cadOn = 0;

signUp.addEventListener("click", ()=>{

    cadOn = 1;

    if(window.screen.availWidth < 768){
        signUpBlock.style.bottom = "140px";

    }

    if(window.screen.availWidth >= 768){
        signUpBlock.style.bottom = "120px";
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
    cadOn = 0;
})




window.addEventListener("resize", ()=>{

    mobileKeyboard = (window.innerHeight < initial_screen_size)

    if(mobileKeyboard === true && cadOn == 1 && window.screen.availWidth <= 425){
        signUpBlock.style.bottom = "26px";
    }
    console.log(mobileKeyboard)
})



console.log("Largura: "+window.screen.availWidth)
console.log("Altura: "+window.screen.availHeight)