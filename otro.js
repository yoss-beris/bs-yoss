document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalInfo = document.getElementById("modal-info");
    const closeBtn = document.querySelector(".close");

    const imagenes = document.querySelectorAll(".imagen-container");

    imagenes.forEach(container => {
        container.addEventListener("click", () => {
            const src = container.getAttribute("data-src");
            const info = container.getAttribute("data-info");

            modalImg.src = src;
            modalInfo.textContent = info;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
