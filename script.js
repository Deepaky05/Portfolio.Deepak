// scroll reveal
const items = document.querySelectorAll(".reveal");

function reveal(){
items.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 80){
el.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// smooth scroll fix
document.querySelectorAll("a[href^='#']").forEach(a=>{
a.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// typing
const text = "Laravel Developer";
let i=0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}
}
typing();

function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {

  // 🔐 EmailJS Init
  emailjs.init({
    publicKey: CONFIG.EMAILJS_PUBLIC_KEY,
  });

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🧠 Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // 🔥 Validation check
    if (!validateForm(name, email, mobile, subject, message)) {
      return;
    }

    // 🚀 Send Email
    emailjs.send("service_upayags", "template_h25lgxh", {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      subject: subject,
      message: message
    })
    .then(() => {
      showToast("Message Sent Successfully 🚀", "success");
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      showToast("Failed to send message ❌", "error");
    });

  });

});
