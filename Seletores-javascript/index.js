/**
* 
* Exemplos de seletores em javascript para a minipulação do DOM.
*
*/ 

document.getElementsByTagName("div"); // Pega o primeiro elemento que possui essa tag.
//Equivalente em jQuery: $('div').

document.querySelectorAll(".my-class")// Pega os seletores que possuem essa classe. Pode ser ID também.
//Equivalente em jQuery: $('.my-class')

document.getElementsByClassName("my-class") // Pega os elementos que possuem essa classe.
//Equivalente em jQuery: $('.my-class')

document.querySelectorAll(".my-class li:first-child") // Pega o primeiro seletor que possui a classe my-class.
//Equivalente em jQuery: $(".my-class li:first-child")

document.querySelector(".my-class") // Seletor nativo. Universal.
//Equivalente em jQuery: $(".my-class").get(0)


/**
* 
* Manipulação do DOM.
*
*/ 

document.body.innerHTML += "<div id='teste'><img src='teste.png'/></div>";// Seletor com péssima performace.
//Equivalente em jQuery: $('body').append("<div id='teste'><img src='teste.png'/></div>");

//Jeito mais performático:
var elemento = document.createDocumentFragment(); //Cria um elemento no DOM sem importancia semântica.
var div = document.createElement("div"); // Cria um div.
div.id = "myDiv"; // Adiciona um ID no div.


/**
* 
* Classes em CSS.
*
*/ 

elemento.classList.add("alguma-outra-classe");
// Equivalente em jQuery: $('minha-classe').addClass('alguma-outra-classe');

elemento.classList.remove("alguma-outra-classe");
// Equivalente em jQuery: $('minha-classe').removeClass('alguma-outra-classe');

if (elemento.classList.contains('alguma-classe')) // Verifica se o elemento possui a classe.
// Equivalente em jQuery: if ($(elemento).hasClass('alguma-classe'));
