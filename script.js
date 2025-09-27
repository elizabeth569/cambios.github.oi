//flota
const particlesContainer = document.querySelector(".particles");

function createParticle() {
  const particle = document.createElement("span");
  particle.classList.add("particle");

  // modo inicial
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight + "px";

  // Tamaño
  const size = Math.random() * 6 + 3;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  // color
  const colors = ["#2ecc71", "#27ae60", "#3498db", "#16a085"];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];

  // movi
  particle.style.position = "absolute";
  particle.style.borderRadius = "50%";
  particle.style.opacity = Math.random();
  particle.style.animation = `rise ${3 + Math.random() * 5}s linear forwards`;

  particlesContainer.appendChild(particle);

  // eli despues de la anim
  setTimeout(() => {
    particle.remove();
  }, 8000);
}
// diseño arripa


const style = document.createElement("style");
style.innerHTML = `
  @keyframes rise {
    from { transform: translateY(0); }
    to { transform: translateY(-110vh); opacity: 0; }
  }
  .particle {
    pointer-events: none;
  }
`;
document.head.appendChild(style);
// se genera constantemente

setInterval(createParticle, 200);
