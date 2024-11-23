document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("small");
        } else {
            header.classList.remove("small");
        }
    });
});