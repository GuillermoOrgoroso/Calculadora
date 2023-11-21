var oPA;
var oPB;
var oP;

function init(){
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicar");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
   
    
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";

    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";

    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";

    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";

    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";

    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";

    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";

    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";

    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";

    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";

    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(E){

        oPA = resultado.textContent;
        oP = "+";
        limpiar();
    }

    resta.onclick = function(e){
        oPA = resultado.textContent;
        oP = "-";
        limpiar();

    }

    division.onclick = function(e){
        oPA = resultado.textContent;
        oP = "/";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        oPA = resultado.textContent
        oP = "*";
        limpiar();
    }

    igual.onclick = function(e) {
        oPB = resultado.textContent;
        resolver();
    }
   

}

function limpiar() {
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent;
    oPA = 0;
    oPB = 0;
    oP = " ";
    resultado.textContent = " "
}

function resolver() {
    var res = 0;
        switch(oP){

            case "+":
                
                res = parseFloat(oPA) + parseFloat(oPB);
                resultado.textContent = res;
                break;

            case "-":
                res = parseFloat(oPA) - parseFloat(oPB);
                resultado.textContent = res;
                break;
            
            case "*":
                res = parseFloat(oPA) * parseFloat(oPB);
                resultado.textContent = res;
                break;
            
            case "/":
                res = parseFloat(oPA) / parseFloat(oPB);
                esultado.textContent = res;
              
                break;

        }

}