import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryArray = document.querySelector(".gallery");

function createItemGallery(items) {
	return items
		.map(
			item => `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
            </li>`,
		)
		.join("");
}

const markup = createItemGallery(galleryItems);

galleryArray.insertAdjacentHTML("afterbegin", markup);

galleryArray.addEventListener("click", onClick);

function onClick(e) {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`);
	instance.show();
	galleryArray.addEventListener("keydown", e => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
}
