// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const elements = {
    container: document.querySelector(".gallery"),
  };
  elements.container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
  
  function createMarkup(arr) {
    return arr.map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    ).join('');
  }
  

    const instance = new SimpleLightbox('.gallery a', {
    captionsData :'alt',
    captionDelay :250,  
    });
    
   
     instance.show

