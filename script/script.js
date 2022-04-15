
//variables and constant

const form = document.querySelector("#send")
const pass = document.querySelector("#pass")
const title = document.querySelector("#valu")
const pag = document.querySelector(".text")


//Get Password

form.addEventListener("click", function(e){
    e.preventDefault()
    const valu1 = pass.value;

    if (valu1 == "ayanokoji"){
        document.querySelector("#valu").innerHTML = "Bem vindo. Enkeli."
        setTimeout(function(){
            window.location.href = 'https://mega.nz/file/2LJQmIab#BE4Q1wSFLf4Z7gIcNo_fWLRDNwBxc1uPuacc0bh1MbE'
        },3000)
        
        
    }else 
    (document.querySelector("#valu").innerHTML = "Senha Incorreta.")
    (document.querySelector("#valu2").innerHTML = "00110010 00111000 00101111 00110000 00111000 00101111 00110010 00110000 00110010 00110010")

    //type write

    function typeWrite(element){
        const textArray = element.innerHTML.split('');
        element.innerHTML ='';
        textArray.forEach((str, index) => {
            setTimeout(function(){
                element.innerHTML += str
            },75 * index) 
        })
        
    }

    typeWrite(title);
})

