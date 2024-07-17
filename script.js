document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
      const line1 = document.getElementById('line1');
      const line2 = document.getElementById('line2');
      line1.style.borderRight = 'none';
      line2.style.opacity = '1';
      line2.style.borderRight = '.15em solid orange';
      line2.style.animation = 'typing 3.5s steps(40, end) forwards, blink-caret .75s step-end infinite';
  }, 3500); // Wait for the first line to finish typing
});

// for sound cards
window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
      "#60d394",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3"
    ];
  
    pads.forEach((pad, index) => {
      pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
      });
    });
  });
