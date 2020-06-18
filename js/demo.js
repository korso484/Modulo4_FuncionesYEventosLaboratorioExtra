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