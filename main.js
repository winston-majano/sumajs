let p = document.getElementById("resultado");


//definicion de funciones 
function suma() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (!num1 || !num2 ) {
        p.innerText = "por favor ingresar numeros validos";
    } else {
        return p.innerText = parseInt(num1) + parseInt(num2);
    }


}


