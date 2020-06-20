//Funciones de calculo
let suma = (op1, op2) => op1+op2;
let resta = (op1, op2) => op1-op2;
let multiplicacion = (op1, op2) => op1*op2;
let division = (op1, op2) => op1/op2;

let num1=0;
let resulParcial = 0;
let resulFinal=0;


//Funciones para recoger valores 
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

//Función Mostrar resultado al pulsar botón =
function mostrarResultado(operador){
    document.getElementById("resultado").innerText = resulParcial;
}

 
//Eventos asociados
document.getElementById("botonSuma").addEventListener("click", recogerInputSuma);
document.getElementById("botonResta").addEventListener("click", recogerInputResta); 
document.getElementById("botonMultiplicacion").addEventListener("click", recogerInputMultiplicacion);
document.getElementById("botonDivision").addEventListener("click", recogerInputDivision); 
document.getElementById("botonResultado").addEventListener("click", mostrarResultado);


///////////////////////HOTEL//////////////////////////

//Inicializamos variables 
var elegido=0;
var costeParcial=0;

//Recogemos Inputs
function recogerInputTipoHabitacion(){
    if(elegido == 0){
        elegido = document.formulario.selecc.value; 
        costeParcial = suma(costeParcial, parseInt(elegido)); 
        document.getElementById("PrecioFinal").innerText = costeParcial;
        return costeParcial;
    }else{
        costeParcial = 0;
        document.getElementById("seleccion").addEventListener("change", recogerInputTipoHabitacion);
        elegido = document.formulario.selecc.value; 
        costeParcial = suma(costeParcial, parseInt(elegido)); 
        document.getElementById("PrecioFinal").innerText = costeParcial;
        return costeParcial;
    }
               
}

function recogerInputSpa(){
    var checkBox = document.getElementById("spa");
    if(checkBox.checked){
        costeParcial = suma(recogerInputTipoHabitacion() , 20);
        document.getElementById("PrecioFinal").innerText = costeParcial;
        return costeParcial;    
    }
    else{
        costeParcial = recogerInputTipoHabitacion();
        document.getElementById("PrecioFinal").innerText = costeParcial;
        return costeParcial;
    }
}

function recogerInputOcupacion(){
    var ocupado = document.formulario.ocupa.value; 
    var ocu = recogerInputSpa();
    switch(ocupado){
        case "simple": 
            costeParcial = resta(ocu, ((ocu*25)/100));
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
}

function recogerInputNoches(){
    var contador = document.formulario.noches.value; 
    var ocu = recogerInputOcupacion();
    costeParcial = multiplicacion(ocu, parseInt(contador));
    document.getElementById("PrecioFinal").innerText = costeParcial;
    return costeParcial;
}

function recogerInputParking(){
    var contador = multiplicacion(10,parseInt(document.formulario.parking.value)); 
    var ocu = recogerInputNoches();
    costeParcial = suma(ocu, parseInt(contador));
    document.getElementById("PrecioFinal").innerText = costeParcial;
    return costeParcial;
}

//Pintamos precio total
function precioTotal(){
    costeParcial = recogerInputParking();
    document.getElementById("PrecioFinal").innerText = costeParcial;
}

//Eventos asociados
document.getElementById("seleccion").addEventListener("change", recogerInputTipoHabitacion);
document.getElementById("spa").addEventListener("change", recogerInputSpa);
document.getElementById("numeroNoc").addEventListener("change", recogerInputNoches);
document.getElementById("numeroPark").addEventListener("change", recogerInputParking);


/*Mostrar con botón el resultado
document.getElementById("calcular").addEventListener("click", precioTotal);*/
