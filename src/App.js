
import "./index.js";

const form = document.querySelector(".add-form");
const liste = document.querySelector(".todos");
const aramaInput = document.querySelector(".search input");


aramaInput.addEventListener("keyup", (e) => {
  const ifade = aramaInput.value.trim().toLowerCase();

  filtreOlustur(ifade);
});

const filtreOlustur = (ifade) => {
  
  Array.from(liste.children).filter((yapilacak) => {

    console.log(yapilacak.textContent.includes(ifade));
    return !yapilacak.textContent.includes(ifade);
  }).forEach((yapilacak)=>{
    yapilacak.classList.add('filtered')

});

Array.from(liste.children).filter((yapilacak) => {

  console.log(yapilacak.textContent.includes(ifade));
  return yapilacak.textContent.includes(ifade);
}).forEach((yapilacak)=>{
  yapilacak.classList.remove('filtered')

});

}

function templateOlustur(yapilacak) {
  let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${yapilacak}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  liste.innerHTML += html;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const yapilacak = form.add.value.trim().toLowerCase();
  //console.log(yapilacak);
  //templateOlustur(yapilacak);
  if (yapilacak.length) {
    //tamamen bosluk için
    templateOlustur(yapilacak);

    form.reset(); //inputu resetleme
  }
});

liste.addEventListener('click', (e) => {
  if (e.target.classList.contains("delete")) {
    //classta delete yazısını bulursa
    e.target.parentElement.remove();
  }

});
