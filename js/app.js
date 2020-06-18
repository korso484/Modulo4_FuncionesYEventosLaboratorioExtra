//Funciones de calculo
var suma = (op1, op2) => op1+op2;
var resta = (op1, op2) => op1-op2;
var multiplicacion = (op1, op2) => op1*op2;
var division = (op1, op2) => op1/op2;


function recogerInput(){
    //obtener primer numero
    var get1 = parseInt(document.getElementById("numero1").value);  
    return get1;
}

//Funciones ejecutar operaciones
function ejecutarSuma(){
    var resulta;   
    //obtener primer numero
    var primero = parseInt(document.getElementById("numero1").value);  
    //obetener segundo numero
    var segundo = parseInt(document.getElementById("numero2").value);
    if(isNaN(primero) || isNaN(segundo)){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = suma(primero, segundo);
        document.getElementById("resultado").innerText = resulta;
    }  
}

function ejecutarResta(){
    var resulta;
    //obtener primer numero
    var primero = parseInt(document.getElementById("numero1").value);  
    //obetener segundo numero
    var segundo = parseInt(document.getElementById("numero2").value);
    if(isNaN(primero) || isNaN(segundo)){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = resta(primero, segundo);
    document.getElementById("resultado").innerText = resulta;
    } 
}
    

function ejecutarMultiplicacion(){
    var resulta;
    //obtener primer numero
    var primero = parseInt(document.getElementById("numero1").value);  
    //obetener segundo numero
    var segundo = parseInt(document.getElementById("numero2").value);
    if(isNaN(primero) || isNaN(segundo)){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = multiplicacion(primero, segundo);
    document.getElementById("resultado").innerText = resulta;
    }    
}

function ejecutarDivision(){
    var resulta;
    //obtener primer numero
    var primero = parseInt(document.getElementById("numero1").value);  
    //obetener segundo numero
    var segundo = parseInt(document.getElementById("numero2").value);
    if(isNaN(primero) || isNaN(segundo)){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = division(primero, segundo);
    document.getElementById("resultado").innerText = resulta;
    }    
}


//Eventos asociados a botones
document.getElementById("botonSuma").addEventListener("click", ejecutarSuma);   
document.getElementById("botonResta").addEventListener("click", ejecutarResta);
document.getElementById("botonMultiplicacion").addEventListener("click", ejecutarMultiplicacion);
document.getElementById("botonDivision").addEventListener("click", ejecutarDivision);