window.addEventListener("scroll", function() {
    const header = document.getElementById("sticky-header");
    if (window.scrollY > 200) {
      header.classList.add("scroll-color-change");
    } else {
      header.classList.remove("scroll-color-change");
    }
  });