import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox';


console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// const { original, preview, description } = galleryItems;

// Розмітка
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {

    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');
gallery.innerHTML = galleryMarkup;

// Функція відкриття
function modalOpen (event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const originalImage = event.target.dataset.source;

        const instance = basicLightbox.create(`
        <img src="${originalImage}" width="800" height="600">
    `)
    
    instance.show()

    gallery.addEventListener('keydown', (event) => {//Закриття кнопкою ESC
        if (event.code === "Escape") {
            instance.close()}

    })
    }
}
gallery.addEventListener('click', modalOpen);


