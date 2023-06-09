const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currScroll = window.pageYOffset;

  if (currScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  if (window.pageYOffset === 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "var(--dark_gray)";
  }
  lastScroll = currScroll;
});
