/* Exercício 2 ajuda do Gabriel, basicamente cria um caminho para chegar até a imagem usando esse comando url,ccreate objetc */

const inputText = document.querySelector('#text-input');
const texto = document.querySelector('#meme-text');
const inputImage = document.querySelector('#meme-insert');// da onde pego a imagem preciso de um input que puxe arquivos
const ImageInContainer = document.querySelector('#meme-image');// onde a imagem vai ficar
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');
const example = document.getElementById('example');

function addText() {
  texto.innerText = inputText.value;
}

inputText.addEventListener('keyup', addText);

// ex2
function imageFromPc() {
  ImageInContainer.src = URL.createObjectURL(inputImage.files[0]);
}

inputImage.addEventListener('input', imageFromPc);

// ex 3 e 4 feito no css
// ex 5 feito no input maxlength
// ex6

function BorderFire() {
  container.style.border = '3px dashed red';
}

buttonFire.addEventListener('click', BorderFire);

function BorderWater() {
  container.style.border = '5px double blue';
}

buttonWater.addEventListener('click', BorderWater);

function BorderEarth() {
  container.style.border = '6px groove green';
}

buttonEarth.addEventListener('click', BorderEarth);

// ex 7

function exampleImg(event) {
  ImageInContainer.src = event.target.src;
}

example.addEventListener('click', exampleImg);
