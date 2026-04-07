function showSidebar(){
  document.querySelector(".sidebar").classList.add("open");
}

function closeSidebar(){
  document.querySelector(".sidebar").classList.remove("open");
}

var typed = new Typed(".input", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true
});

const navLinks = document.querySelectorAll(".navlinks li a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    // remove from all
    navLinks.forEach(l => l.classList.remove("active"));

    // add to clicked
    this.classList.add("active");
  });
});


const allLinks = document.querySelectorAll(".sidebar a, .navlinks a");

allLinks.forEach(link => {
  link.addEventListener("click", function () {

    allLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// emailjs initialization
(function () {
  emailjs.init("L7XFf6LG1lbwI5T74"); // public key
})();

const form = document.querySelector(".right-side");
const btn = document.getElementById("submit-btn");
const btnText = document.querySelector(".btn-text");
const loader = document.querySelector(".loader");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 🔒 simple spam protection
  if (document.getElementById("your-message").value.length < 10) {
    msg.innerText = "Message too short!";
    msg.className = "error";
    return;
  }

  // loading start
  btnText.style.display = "none";
  loader.style.display = "inline-block";

  emailjs.send("service_gfse2az", "template_33qgkza", {
    name: document.getElementById("your-name").value,
    email: document.getElementById("your-email").value,
    message: document.getElementById("your-message").value,
  })
    .then(() => {
      msg.innerText = "Message sent successfully ✅";
      msg.className = "success";
      form.reset();
    })
    .catch(() => {
      msg.innerText = "Something went wrong ❌";
      msg.className = "error";
    })
    .finally(() => {
      loader.style.display = "none";
      btnText.style.display = "inline";
    });
});