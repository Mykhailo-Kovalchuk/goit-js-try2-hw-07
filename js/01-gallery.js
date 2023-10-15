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

let instance;

// Функція відкриття модалки
function modalOpen (event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const originalImage = event.target.dataset.source;

        instance = basicLightbox.create(`
        <img src="${originalImage}" width="800" height="600">
    `)
    
    instance.show()
    gallery.addEventListener('keydown', removeEscListener);
    }
}

// Закриття і вдалення слухача ESC
function removeEscListener (event) {
  
  if (event.code === "Escape") {
    instance.close(() => gallery.removeEventListener('keydown', removeEscListener)); }
}

// Слухач і виклик модалки
gallery.addEventListener('click', modalOpen);


