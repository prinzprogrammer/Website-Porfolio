const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navigationLinks = document.querySelectorAll(".navLinks li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("navActive");

    //Animate links
    navigationLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinksFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //Animate burger
    burger.classList.toggle("burgerAnimation");
  });
};

navSlide();
