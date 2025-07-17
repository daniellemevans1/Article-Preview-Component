document.addEventListener("DOMContentLoaded", function() {
    const svgButtonEl = document.querySelector(".svg-button");
    const iconPanelEl = document.querySelector(".icon-panel");
    console.log(iconPanelEl);

    svgButtonEl.addEventListener("click", function() {
        iconPanelEl.togglePopover();
    });


    // document.addEventListener("click", function(event) {
    //     if(!iconPanelEl.contains(event.target) && event.target !== svgButtonEl) {
    //         iconPanelEl.hidePopover();
    //     }
    // });
});


// const svgButtonEl = document.querySelector(".svg-button");
// const iconPanelEl = document.querySelector(".icon-panel");

// let getScreenWidth = screen.width;
// // console.log(getScreenWidth);


// svgButtonEl.addEventListener("click", function() {
//     if(getScreenWidth > 720) {
//         svgButtonEl.classList.toggle("icon-panel");
//     } else {
//         svgButtonEl.classList.toggle("icon-panel");
//     }
// });

// function openPopover() {
//     svgButtonEl.dataset.isPopoverOpen = "true";
// }

// function closePopover() {
//     svgButtonEl.dataset.isPopoverOpen = "false";
// }

// svgButtonEl.addEventListener("click", function() {

//     let isPopoverOpen = svgButtonEl.dataset.isPopoverOpen;

//     if(isPopoverOpen === "true") {
//         closePopover();
//     } else {
//         openPopover();
//     }
// });