document.addEventListener("DOMContentLoaded", function() {
    const svgButtonEl = document.querySelector(".svg-button");
    const iconPanelEl = document.querySelector(".icon-panel");
    console.log(iconPanelEl);

    svgButtonEl.addEventListener("click", function() {
        iconPanelEl.togglePopover();
    });

});
