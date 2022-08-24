import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';


const galleryBox = document.querySelector('.gallery');
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

function createPhotoGalleryMarkup(galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" 
    href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> 
`;
    }).join('');
};
galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

const instance = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


function onGalleryBoxClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  };
   


  galleryBox.addEventListener('keydown', onCloseModalEscPress);
  
  function onCloseModalEscPress(event) {
console.log(event.code)
    if (event.code === "Escape") {
      instance.close();
      galleryBox.removeEventListener('keydown', onCloseModalEscPress);
    }
  
  
  };
}



