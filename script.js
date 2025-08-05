const gooseClick = document.querySelector('.goose-home, .honk-text');
const honkBubble = document.querySelector('.honk-speech-bubble');
const honk = document.getElementById('honk-sound');

if (gooseClick && honk) {
  gooseClick.addEventListener('click', () => {
    honk.play();
    if (honkBubble) {
      honkBubble.style.display = 'block';
      setTimeout(() => {
        honkBubble.style.display = 'none';
      }, 900);
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('.typewriter');

  if (element) {
    const texts = ["website", "blog", "corner", "journal"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        charIndex--;
        element.textContent = currentText.substring(0, charIndex);
      } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      const speed = isDeleting ? 100 : 150;
      setTimeout(typeWriter, speed);
    }

    element.classList.add('cursor');
    setTimeout(typeWriter, 500);
  }
});


function toggleTheme() {
   document.body.classList.toggle("dark");

   const isDarkMode = document.body.classList.contains("dark");
   localStorage.setItem("darkMode", isDarkMode); 

   document.querySelectorAll(".toggle-theme, .goose-light, .goose-home, .goose-wave")
           .forEach(el => el.classList.toggle("dark"));
}

document.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("darkMode") === "true";

  if (darkMode) {
    document.body.classList.add("dark");

    document.querySelectorAll(".toggle-theme, .goose-light, .goose-home, .goose-wave")
            .forEach(el => el.classList.add("dark"));
  }
});