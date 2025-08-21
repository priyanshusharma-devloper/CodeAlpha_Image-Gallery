const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const downloadBtn = document.getElementById('downloadBtn');
let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = 'flex';
  });
});


function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const src = images[currentIndex].src;
  lightboxImg.src = src;


  downloadBtn.onclick = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `image-${currentIndex + 1}.png`;
    link.click();
  };
}


function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}


function closeLightbox() {
  lightbox.style.display = 'none';
}


document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  }
});
