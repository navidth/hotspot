const itemMobile = document.querySelectorAll(".titraz_mobile p");
const body = document.getElementsByTagName("body");

if (body[0].clientWidth > 575) {
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".main_titraz li");
    let index = 0;

    function createAnimations() {
      items.forEach((item) => item.classList.remove("highlight"));
      items[index].classList.add("highlight");

      if (items[index] > 4) {
        items[index].classList.add("fontChange");
      }
      index = (index + 1) % items.length;
    }
    setInterval(createAnimations, 2000);
  });
} else if (body[0].clientWidth < 575) {
  document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".highlitMobile");
    let index = 0;

    function showNextParagraph() {
      paragraphs.forEach((p) => p.classList.remove("visible"));
      paragraphs[index].classList.add("visible");
      paragraphs[index].classList.add("visible");
      index++;
      if (index >= paragraphs.length) {
        index = 0;
      }
    }

    setInterval(showNextParagraph, 2000);
  });
  //   setInterval(createAnimationsMobile, 2000);
  //   createAnimationsMobile();
}
