// Typing Animation
const text = "A tech enthusiast actively sharpening my backend development skills and diving deep into AWS.";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 40);
  }
}
window.onload = type;

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
