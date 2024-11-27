document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("ul img");
    const lightbox = document.querySelector("#lightbox");
    const lightboxImg = lightbox.querySelector("img");
  
    images.forEach((img) => {
      img.addEventListener("click", () => {
        const fullImgSrc = img.getAttribute("data-full-img");
        lightboxImg.src = fullImgSrc; 
        lightbox.showModal(); 
      });
    });
  
    lightbox.addEventListener("click", (event) => {
      if (!event.target.matches("img")) {
        lightbox.close();
      }
    });
  });
  