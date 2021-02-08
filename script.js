//Write your own code here

const sections = document.querySelectorAll("section");
sections.forEach(color);

function color(sec) {
  sec.classList.add("filled");
  sec.previousElementSibling.remove();
}

const bre = document.querySelectorAll("br");
bre.forEach(remBR);

function remBR(e) {
  e.remove();
}

//DON'T touch any other files!
