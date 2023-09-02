// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector('.gallery')

    const markup = galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                    class="gallery__image"
                    src='${preview}'
                    title ='${description}'
                    alt='${description}'
                />
            </a>
        </li>`).join('')
    gallery.insertAdjacentHTML("afterbegin", markup);

 const style = `
  <style>
    .gallery {
      list-style: none;
      }
  </style>`;

document.head.insertAdjacentHTML('beforeend', style);
const galleryList = new SimpleLightbox('.gallery a', { captionDelay: 250 })
