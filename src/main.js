const accordionHeader = document.querySelectorAll(".accordion-header");
// const accordionBody = document.querySelector(".accordion-body");

accordionHeader.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + "px";
    } else {
      item.nextElementSibling.style.height = "0px";
    }
  });
});
