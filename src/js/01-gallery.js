import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const markupEl = createItemsMarkup(galleryItems);

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}
galleryEl.insertAdjacentHTML('afterbegin', markupEl);
const lightbox = new SimpleLightbox('.gallery a', {});

console.log(galleryItems);
