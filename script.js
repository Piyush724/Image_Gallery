document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    document.querySelector(".close").addEventListener("click", closeLightbox);

    function closeLightbox() {
        lightbox.style.display = "none";
        lightboxImg.style.transform = "scale(1)";
    }

    function zoomIn() {
        let currentScale = parseFloat(getComputedStyle(lightboxImg).getPropertyValue("transform").split(",")[3]) || 1;
        lightboxImg.style.transform = `scale(${currentScale + 0.2})`;
    }

    function zoomOut() {
        let currentScale = parseFloat(getComputedStyle(lightboxImg).getPropertyValue("transform").split(",")[3]) || 1;
        if (currentScale > 0.5) {
            lightboxImg.style.transform = `scale(${currentScale - 0.2})`;
        }
    }

    window.zoomIn = zoomIn;
    window.zoomOut = zoomOut;
    window.closeLightbox = closeLightbox;
});