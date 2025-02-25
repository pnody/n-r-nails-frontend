const profileIcon = document.getElementsByClassName('profile-icon')[0];
const nailsLogo = document.getElementsByClassName('nailslogo')[0];

profileIcon.addEventListener('click', () => {
    window.location.href = ('./personaldata.html');
});

nailsLogo.addEventListener('click', () => {
    window.location.href = ('./home.html');
});
document.addEventListener("DOMContentLoaded", async function () {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    // Adatbázisból kép lekérése
    async function fetchImages() {
        try {
            const response = await fetch("http://localhost:3000/images");
            const images = await response.json();

            images.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image.url;
                imgElement.alt = "Gallery Image";
                imgElement.addEventListener("click", function () {
                    modal.style.display = "flex";
                    modalImg.src = this.src;
                });
                gallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Hiba történt a képek lekérésekor:", error);
        }
    }

    fetchImages();

    // Modál bezárása
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});