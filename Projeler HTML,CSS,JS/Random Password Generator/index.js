const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    createPassword();
});

copyIconEl.addEventListener("click", ()=>{
    coppyPassword();
    if(inputEl.value){
        alertEl.classList.remove("active");
        setTimeout(()=>{
            alertEl.classList.add("active");
        },2000);
    }
});

function createPassword(){
    const chars ="0123456789qwertyopasdfghjklizxcvbnm!@#$%&*+_:QWERTYIOPASDFGHJKLZXCVBNM"
    const passwordLength = 14
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    };
    inputEl.value = password;
    alertEl.innerText = password + "coppied!"
};

function coppyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999); // For mobile project
    navigator.clipboard.writeText(inputEl.value);
    
}



