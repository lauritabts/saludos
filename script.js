var btnGreet = document.getElementById("btnSaludo");
var txtName = document.getElementById("txtNombre");
var txtGreet = document.getElementById("txtSaludo");

var lista =[
    "hola",
    "hello",
    "ciao",
    "Aloha",
    "konniichiwa",
    "Ola",
    "Namaste"
]
function saludar(){
    if (txtName.value == ""){
        alert("Error, Ingresa tu nombre.")
        txtGreet.innerHTML=""
    }else{
        var nombre = txtName.value
        var numero = Math.floor(Math.random()*lista.length)
        var saludo = lista[numero] + "," + nombre
        txtGreet.innerHTML = saludo
    }
} 