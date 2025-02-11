const navlink = document.querySelector(".nav")

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
 
    
    const navHeight = navlink.getBoundingClientRect().height;
  
    
    if (scrollHeight > navHeight)
    {
      navlink.classList.add("fixed-nav")
    }
    else {
        navlink.classList.remove("fixed-nav")
    }
})
const options = {
  root: null,
  threshold: 0.3,
  rootMargin:"0px"
}
const sections = document.querySelectorAll("section");
const myinfo = document.querySelector(".my-info");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const leftDiv = entry.target.querySelector(".my-info-2");
      const rightDiv = entry.target.querySelector(".right");
      const links = entry.target.querySelector(".links");

      if (leftDiv) { leftDiv.classList.add("show") };
      if (links) { links.classList.add("show") };
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
