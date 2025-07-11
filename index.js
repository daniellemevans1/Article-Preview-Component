const shareEl = document.querySelector(".svg-button");
const iconToastEl = document.querySelector(".icon-toast");

let getScreenWidth = screen.width;
// console.log(getScreenWidth);

shareEl.addEventListener("click", function() {
    if(getScreenWidth > 670) {
        shareEl.classList.toggle("icon-toast");
    } else {
        shareEl.classList.toggle("icon-block");
    }
});

function openPopover() {
    shareEl.dataset.isPopoverOpen = "true";
}

function closePopover() {
    shareEl.dataset.isPopoverOpen = "false";
}

shareEl.addEventListener("click", function() {

    let isPopoverOpen = shareEl.dataset.isPopoverOpen;

    if(isPopoverOpen === "true") {
        closePopover();
    } else {
        openPopover();
    }
});