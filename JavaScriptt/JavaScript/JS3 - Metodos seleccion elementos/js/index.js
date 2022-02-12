
parrafo = document.querySelectorAll(".parrafo");

 document.write(parrafo[1]);

const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type", "text");
rangoEtario.setAttribute("name", "lo crea");

valorDelAtributo = rangoEtario.getAttribute("type");

document.write("<br>" + valorDelAtributo);


// Atributos globales

const titulo = document.querySelector(".titulo");
titulo.setAttribute("contenteditable", "true");


titulo.setAttribute("dir", "rtl");
