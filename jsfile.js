let myImages = document.querySelectorAll('img[data-src]')


function loadImages(image){
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    myImages.forEach((img) => {
      observer.observe(img);
    });
  } else {
    myImages.forEach((img) => {
      loadImages(img);
    });
  }
  