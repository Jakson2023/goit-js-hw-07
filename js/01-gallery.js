import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulGallery = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img  class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
        )
        .join("");
}

ulGallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

console.log(galleryItems);

ulGallery.addEventListener("click", openImg);

function openImg(event) {
    event.preventDefault();
    const { target } = event;
    const dataSource = target.dataset.source;
    if (!target.classList.contains("gallery")) {
        const instance = basicLightbox.create(`
    <img src="${dataSource}" width="1280"  >
`);
        instance.show();

        document.addEventListener("keydown", pressKey);
        function pressKey(event) {
            if (event.code === "Escape") {
                instance.close();
                document.removeEventListener("keydown", pressKey);
            }
        }
    }
}
