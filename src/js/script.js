const thumbnails = document.querySelectorAll('ul li img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');


thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const fullImgUrl = thumbnail.dataset.fullImg; 
    lightboxImg.src = fullImgUrl; 
    lightbox.showModal(); 
  });
});


lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.close(); 
  }
});
