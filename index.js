// Matrix rain effect
function createMatrixRain() {
  const matrixBg = document.getElementById("matrixBg");
  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  for (let i = 0; i < 50; i++) {
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.left = Math.random() * 100 + "%";
    char.style.animationDelay = Math.random() * 3 + "s";
    char.style.animationDuration = Math.random() * 2 + 2 + "s";
    matrixBg.appendChild(char);
  }
}

// Typing effect
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Glitch effect
function addGlitchEffect() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    setInterval(() => {
      if (Math.random() < 0.1) {
        section.style.filter = "hue-rotate(180deg)";
        setTimeout(() => {
          section.style.filter = "none";
        }, 100);
      }
    }, 2000);
  });
}

// Cursor trail effect
function createCursorTrail() {
  const trail = document.createElement("div");
  trail.style.position = "fixed";
  trail.style.width = "10px";
  trail.style.height = "10px";
  trail.style.background = "#00ff00";
  trail.style.borderRadius = "50%";
  trail.style.pointerEvents = "none";
  trail.style.zIndex = "9999";
  trail.style.transition = "all 0.1s ease";
  document.body.appendChild(trail);

  document.addEventListener("mousemove", (e) => {
    trail.style.left = e.clientX - 5 + "px";
    trail.style.top = e.clientY - 5 + "px";
  });
}

// Initialize effects
document.addEventListener("DOMContentLoaded", () => {
  createMatrixRain();
  addGlitchEffect();
  createCursorTrail();

  // Add some random glitch effects
  setInterval(() => {
    const randomElement =
      document.querySelectorAll("*")[
        Math.floor(Math.random() * document.querySelectorAll("*").length)
      ];
    if (randomElement && randomElement.style) {
      randomElement.style.textShadow = "2px 0 #ff0000, -2px 0 #0000ff";
      setTimeout(() => {
        randomElement.style.textShadow = "";
      }, 50);
    }
  }, 3000);

  const currDate = new Date();
  const dateTag = document.querySelector(".date");
  dateTag.append(currDate.toLocaleDateString());
});

// Add some retro sound effects (visual only)
document.addEventListener("click", () => {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100%";
  flash.style.height = "100%";
  flash.style.background = "rgba(255, 255, 255, 0.1)";
  flash.style.pointerEvents = "none";
  flash.style.zIndex = "10000";
  flash.style.transition = "opacity 0.1s";
  document.body.appendChild(flash);

  setTimeout(() => {
    flash.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(flash);
    }, 100);
  }, 50);
});
