const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navParent = document.querySelector("nav");
  const nav = document.querySelector(".navigation");
  const navigation = document.querySelectorAll(".navigation li");
  // Toggle Navbar
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
 
    // Bar animaton
    burger.classList.toggle("toggle");
  });
};
navSlide();

const navClose = () =>{
  const nav = document.querySelector(".navigation");
  const burger = document.querySelector(".burger");
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
}


 

 
 
