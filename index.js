const shareEl = document.querySelector("svg");


shareEl.addEventListener("click", function() {
    if(screen.width > 670) {
        shareEl.classList.toggle("icon-toast");
    } else {
        shareEl.classList.toggle("icon-block");
    }
});