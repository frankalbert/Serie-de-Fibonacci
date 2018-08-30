// JavaScript Document
"use strict";

let serie = [];

function mostrarSerie(){
  let n = Number(document.getElementById('entrada').value);
  if(/^[0-9]*$/.test(n)){
    fibonacci(n);
    document.getElementById('contenido').innerHTML = `
      <h2>La serie de Fibonacci con ${n} términos es : </h2> <br />
      <p> ${serie.join(", ")}</p>
    `;
          
  }
  else{
    alert('Debe introducir un número y que sea positivo');
    document.getElementById('contenido').innerHTML = '';
    document.getElementById('entrada').focus();
    return false;
  }
}

function fibonacci(n){
  if(n === 0 || n === 1){
    serie = [];
    serie.push(1);			
  }else{
    serie = [1, 1];
    while(n > serie.length){
      serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
    }
  }
}

document.getElementById('calcular').addEventListener("click", mostrarSerie);

/* Mi Método */ 
/*
  let serie = [];

function mostrarSerie(){
  let n = Number(document.getElementById('entrada').value);
  if(/^[0-9]*$/.test(n)){
    fibonacci(n);
    document.getElementById('contenido').innerHTML = `
      <p>La serie de Fibonacci con ${n} tÃ©rminos es : ${serie.join(", ")}</p>
    `;
          
  }
  else{
    alert('Debe introducir un nÃºmero y que sea positivo');
    document.getElementById('contenido').innerHTML = '';
    document.getElementById('entrada').focus();
    return false;
  }
}

function fibonacci(n){
  if(n === 0 || n === 1){
    serie = [];
    serie.push(1);			
  }else{
    serie = [1, 1];
    while(n > serie.length){
      serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
    }
  }
}

/* */


/*** 

  function fibonacci(n){
  return (n === 0) ? (0) : (n === 1) ? (1) : (fibonacci(n - 1) + fibonacci(n - 2))
}

function mostrarSerie(){
  let n = Number(document.getElementById('entrada').value);
  
  if(/^[0-9]*$/.test(n)){
    
    let arreglo = [];
    
    for(var i = 0; i < n; i++){
      arreglo.push(fibonacci(i + 1));
    }

    document.getElementById('contenido').innerHTML = `
      <p>La serie de Fibonacci con ${n} tÃ©rminos es : ${arreglo.join(", ")}</p>
    `;
          
  }
  else{
    alert('Debe introducir un nÃºmero y que sea positivo');
    document.getElementById('contenido').innerHTML = '';
    document.getElementById('entrada').focus();
    return false;
  }
}	



***/