//Funciones de calculo
let suma = (op1, op2) => op1+op2;
let resta = (op1, op2) => op1-op2;
let multiplicacion = (op1, op2) => op1*op2;
let division = (op1, op2) => op1/op2;

let num1=0;
let resulParcial = 0;
let resulFinal=0;



function recogerInputSuma(){
    //obtener primer numero
    var get1 = parseInt(document.getElementById("numero1").value);  
    //return resultadoParcial;
    if(isNaN(get1)){
        document.getElementById("resultado").innerText = "Por favor introduzca un número";
    }else{
        resulParcial = suma(resulParcial , get1);
        //document.getElementById("resultado").innerText = resulParcial;
        return resulParcial;
    } 
}

function recogerInputResta(){
    //obtener primer numero
    var get1 = parseInt(document.getElementById("numero1").value);  
    //return resultadoParcial;
    if(isNaN(get1)){
        document.getElementById("resultado").innerText = "Por favor introduzca un número";
    }else{
        resulParcial = resta(resulParcial , get1);
        //document.getElementById("resultado").innerText = resulParcial;
        return resulParcial;
    } 
}

function recogerInputMultiplicacion(){
    //obtener primer numero
    var get1 = parseInt(document.getElementById("numero1").value);  
    //return resultadoParcial;
    if(isNaN(get1)){
        document.getElementById("resultado").innerText = "Por favor introduzca un número";
    }else{
        resulParcial = multiplicacion(resulParcial , get1);
        //document.getElementById("resultado").innerText = resulParcial;
        return resulParcial;
    } 
}

function recogerInputDivision(){
    //obtener primer numero
    var get1 = parseInt(document.getElementById("numero1").value);  
    //return resultadoParcial;
    if(isNaN(get1)){
        document.getElementById("resultado").innerText = "Por favor introduzca un número";
    }else{
        resulParcial = division(resulParcial , get1);
        //document.getElementById("resultado").innerText = resulParcial;
        return resulParcial;
    } 
}

function mostrarResultado(operador){
    document.getElementById("resultado").innerText = resulParcial;
}

 

document.getElementById("botonSuma").addEventListener("click", recogerInputSuma);
document.getElementById("botonResta").addEventListener("click", recogerInputResta); 
document.getElementById("botonMultiplicacion").addEventListener("click", recogerInputMultiplicacion);
document.getElementById("botonDivision").addEventListener("click", recogerInputDivision); 
document.getElementById("botonResultado").addEventListener("click", mostrarResultado);


///////////////////////HOTEL//////////////////////////

var elegido=0;
var costeParcial=0;
var costeFinal =0;

function recogerInputTipoHabitacion(){
        elegido = document.formulario.selecc.value; 
        costeParcial = suma(costeParcial, parseInt(elegido)); 
        document.getElementById("PrecioFinal").innerText = costeParcial;
        return costeParcial;     
}

function recogerInputSpa(){
    var checkBox = document.getElementById("spa");
    if(checkBox.checked){
        costeParcial = suma(recogerInputTipoHabitacion() , 20);
        document.getElementById("PrecioFinal").innerText = costeParcial;
        return costeParcial;    
    }
    else{
        console.log("SEGUNDO");
    }
}

function recogerInputOcupacion(){
    var ocupado = document.formulario.ocupa.value; 
    var ocu = recogerInputSpa();
    switch(ocupado){
        case "simple": 
            costeParcial = resta(ocu, ((ocu*25)/100));
            console.log(costeParcial);
            return costeParcial;
            break;
        case "doble":
            costeParcial = ocu;
            return costeParcial;
            break;
        case "triple":
            costeParcial = suma(ocu, ((ocu*25)/100));
            return costeParcial;
            break;
    }

    document.getElementById("PrecioFinal").innerText = costeParcial;
    return costeParcial;     
}






document.getElementById("calcular").addEventListener("click", recogerInputOcupacion);
