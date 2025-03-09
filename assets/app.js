const imgs = document.querySelectorAll(".imgSummary");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    if (img.src.includes("icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
    } else {
      img.src = "assets/images/icon-plus.svg";
    }
  });
});
