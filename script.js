// creating a button click show hind navbar

var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelectorAll(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UX Designer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});

const navLinks = document.querySelectorAll(".navlinks li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      // remove active from all
      navLinks.forEach(l => l.classList.remove("active"));
      // add active to clicked one
      this.classList.add("active");
    });
  });


// Toggle button "selected" states for interests
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
      tag.addEventListener('click', () => {
        const isSelected = tag.classList.contains('selected');
        if (isSelected) {
          tag.classList.remove('selected');
          tag.setAttribute('aria-pressed', 'false');
        } else {
          tag.classList.add('selected');
          tag.setAttribute('aria-pressed', 'true');
        }
      });
    });