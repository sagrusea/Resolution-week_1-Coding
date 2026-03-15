document.addEventListener('DOMContentLoaded', () => {
    const galleryImgs = document.querySelectorAll('.gallery img')
    const zoomDiv = document.getElementById('zoom')
    const zoomImg = document.getElementById('zoom_img')
    const closeBtn = document.getElementById('closebtn')
    galleryImgs.forEach(image => {
        image.addEventListener('click', () => {
            zoomImg.src = image.src;
            zoomDiv.style.display = 'flex';
        });
    });
    closeBtn.addEventListener('click', () => {
        zoomDiv.style.display = 'none';
    });
});