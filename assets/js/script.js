
// Swiper Slider home page
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});





/**** * FlyEasyGo Dynamic Pagination********/
function renderPagination(totalPages, currentPage) {
    const container = document.getElementById("flyeasygo-pagination");
    container.innerHTML = "";

    // Helper to create page element
    function addPage(num, isActive = false) {
        const page = document.createElement("span");
        page.textContent = num;
        page.classList.add("flyeasygo-page-number");
        if (isActive) page.classList.add("flyeasygo-page-active");

        page.addEventListener("click", () => {
            renderPagination(totalPages, num);
        });

        container.appendChild(page);
    }

    // Show first page
    if (currentPage > 2) addPage(1);

    // Dots before
    if (currentPage > 3) {
        const dots = document.createElement("span");
        dots.textContent = "...";
        dots.style.color = "#6c7a89";
        container.appendChild(dots);
    }

    // Middle pages (current ±1)
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
        addPage(i, i === currentPage);
    }

    // Dots after
    if (currentPage < totalPages - 2) {
        const dots = document.createElement("span");
        dots.textContent = "...";
        dots.style.color = "#6c7a89";
        container.appendChild(dots);
    }

    // Last page
    if (currentPage < totalPages - 1) addPage(totalPages);
}

// Initialize Pagination
renderPagination(10, 1); // (totalPages, currentPage)
