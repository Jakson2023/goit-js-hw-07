import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGallery = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) => `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}" >
               <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"  />
            </a>
            </li>`
        )
        .join("");
}

ulGallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

console.log(galleryItems);

let gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });
gallery.on("show.simplelightbox", function () {});
