import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryArray = document.querySelector(".gallery");

function createItemGallery(items) {
	return items
		.map(
			item => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`,
		)
		.join("");
}

const markup = createItemGallery(galleryItems);

galleryArray.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
