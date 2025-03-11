document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Justin's Portfolio!");

    // Image modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.querySelector(".close");

    // Ensure modal is hidden on load
    modal.style.display = "none";

    // Image click event to open modal
    document.querySelectorAll(".card-pic").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Close the modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal if clicking outside of the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Prevent project card click from triggering download link
    document.querySelectorAll(".download-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents project card click event from triggering
        });
    });
});
