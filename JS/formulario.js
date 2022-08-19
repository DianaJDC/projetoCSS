/*Validaçao do formulario*/

const nome =document.getElementById("nome");
const email =document.getElementById("email");
const comentario =document.getElementById("comentario");
const form = document.getElementById("card")
const mensage= document.getElementById("mensage")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let mostrar=""
    let entrar = false
    let correo =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if(nome.value.length <5){
        mostrar += `O nome é inválido <br>`
        entrar = true
    }
    if(!correo.test(email.value)){
        mostrar += `O e-mail não é válido <br>`
        entrar = true
    }
    if(comentario.value.length <10){
        mostrar += `O comentário é inválido <br>`
        entrar = true
    }
    if(entrar){
        mensage.innerHTML = mostrar
    }
    
})
/*API Whatssaph*/

const evento = document.getElementById('enviar')
const enviarFormulario =() => {
    let nome1 = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensage1 = document.getElementById('comentario').value;  
   ; 
let numero= 554384779410;
var win= window.open(`https://wa.me/${numero}?text=Ola%20meu%20nome%20é%20${nome1}
%20meu%20emai%20é%20${email}, Mensage:%20${mensage1}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)