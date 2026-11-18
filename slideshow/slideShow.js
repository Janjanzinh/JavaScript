'use strict';

const images = [
    { 'id': '1', 'url': './img/espada.jpg' },
    { 'id': '2', 'url': './img/mago.jpg' },
    { 'id': '3', 'url': './img/vik.jpg' },
    { 'id': '4', 'url': './img/vikk.jpg' },
    { 'id': '5', 'url': './img/ligada.jpg' },
    { 'id': '6', 'url': './img/desligada.jpg' },
    { 'id': '7', 'url': './img/quebrada.jpg' },
]

const container = document.querySelector('#container-items');

const loadImagens = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `

    })
}


loadImagens(images, container);