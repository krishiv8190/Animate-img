const gold = document.getElementById("gold");
const overlay = document.getElementById("overlay");
const card = document.getElementById("card-image");
const card2 = document.getElementById("card");

function addOverlayHover() {
    overlay.classList.add("overlay-hoverr");
}

function removeOverlayHover() {
    overlay.classList.remove("overlay-hoverr");
}

gold.addEventListener("mouseenter", addOverlayHover);
gold.addEventListener("mouseleave", removeOverlayHover);

card.addEventListener("mouseenter", addOverlayHover);
card.addEventListener("mouseleave", removeOverlayHover);

card2.addEventListener("mouseenter", addOverlayHover);
card2.addEventListener("mouseleave", removeOverlayHover);

overlay.addEventListener("mouseenter", addOverlayHover);
overlay.addEventListener("mouseleave", removeOverlayHover);
