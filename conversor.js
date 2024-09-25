function convertir(a,b){
    let resultado=a*b;
    return resultado;
}

var dinero=10;
var cambio=125;
//se activa cuando hacemos click en elcuerpo del body
function iniciar_conversion(){
    cambio=document.getElementById("cambio").value;
    //recoje el contenido de un input e introducirlo dentro del valor de la variable dinero
    dinero=document.getElementById("dinero").value;
    //condicion en el caso de que sea valor nulo nos de 1
    dinero =(dinero>0) ? dinero : 1;
    recibo=convertir(dinero,cambio);
    document.getElementById("conversiones").innerHTML += `${dinero} son ${recibo} yenes<br>`;
    //para que se ponga a cero despues de dar resultado
    document.getElementById("dinero").value="";
    //para que despues de pulsar para operacion el cursor aparezca dendro de la caja
    document.getElementById("dinero").focus();

}

window.onload = inicio;

function inicio(){
    //para que cuando pulsamos enter actue y nos de resultado
    document.getElementById("dinero").onkeydown = teclado;
    document.getElementById("cambio").value = cambio;
    document.getElementById("boton").onclick = iniciar_conversion;
}

//funcion teclado para enter
function teclado(e){
    let codigo_tecla=e.keyCode;
    //alert(codigo_tecla);me da el numero de tecla
    if(codigo_tecla==13){
        iniciar_conversion();
    }
}