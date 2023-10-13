import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
});

const options = {
  captionsData: "alt",
  captionDelay: 250,

  spinner: false,
  close: false,

  animationSpeed: 500,
  widthRatio: 1,
};

const lightbox = new SimpleLightbox(".gallery a", options);
lightbox.on("show.simplelightbox", () => {
  console.log("Enjoy");
});
