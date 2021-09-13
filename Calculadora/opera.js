var uno;
var dos;
var numero;
var result;

function suma(){
    var oneElement =document.getElementById("num1");
    var twoElement =document.getElementById("num2");
    uno= oneElement.value;
    dos= twoElement.value;
    console.log(uno);
    console.log(dos);

    result= parseInt(uno)+parseInt(dos);

    console.log(result);
    document.getElementById("resultado").innerHTML='Resultado= <b>'+result+'</b>';

}

function resta(){
    var oneElement =document.getElementById("num1");
    var twoElement =document.getElementById("num2");
    uno= oneElement.value;
    dos= twoElement.value;
    console.log(uno);
    console.log(dos);

    result= uno-dos;

    console.log(result);
    document.getElementById("resultado").innerHTML='Resultado= <b>'+result+'</b>';

}

function multiplicacion(){
    var oneElement =document.getElementById("num1");
    var twoElement =document.getElementById("num2");
    uno= oneElement.value;
    dos= twoElement.value;
    console.log(uno);
    console.log(dos);

    result= uno*dos;

    console.log(result);
    document.getElementById("resultado").innerHTML='Resultado= <b>'+result+'</b>';

}

function division(){
    var oneElement =document.getElementById("num1");
    var twoElement =document.getElementById("num2");
    uno= oneElement.value;
    dos= twoElement.value;
    console.log(uno);
    console.log(dos);

    result= uno/dos;

    console.log(result);
    document.getElementById("resultado").innerHTML='Resultado= <b>'+result+'</b>';

}

function cuadrado(){
    var numElement =document.getElementById("num");
    numero= numElement.value;
    console.log(numero);

    result=Math.pow(numero,2);

    console.log(result);
    document.getElementById("resultado2").innerHTML='Resultado= <b>'+result+'</b>';

}

function sqrt(){
    var numElement =document.getElementById("num");
    numero= numElement.value;
    console.log(numero);

    result=Math.sqrt(numero);

    console.log(result);
    document.getElementById("resultado2").innerHTML='Resultado= <b>'+result+'</b>';

}

function pow(){
    var oneElement =document.getElementById("bas");
    var twoElement =document.getElementById("exp");
    uno= oneElement.value;
    dos= twoElement.value;
    console.log(uno);
    console.log(dos);

    result=Math.pow(uno,dos);

    console.log(result);
    document.getElementById("resultado3").innerHTML='Resultado= <b>'+result+'</b>';

}