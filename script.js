/***About-us***/


const portraitOne = document.querySelector('#portraitOne');
const portraitTwo = document.querySelector('#portraitTwo');
const portraitThree = document.querySelector('#portraitThree');
const portraitFour = document.querySelector('#portraitFour');
const portraitFive = document.querySelector('#portraitFive');

let allPortraits =[portraitOne,portraitTwo,portraitThree,portraitFour,portraitFive]


portraitMoove = (portrait)=> {
  portraitOne.addEventListener('mouseenter', () => {
    portraitOne.src = "./assets/citys/Saint-Aubin.png";
})
portraitOne.addEventListener('mouseleave',() =>{
  portraitOne.src = "./assets/img-team/portraitOne.png";
})
portraitTwo.addEventListener('mouseenter', () => {
  portraitTwo.src = "./assets/citys/Saint-Aubin.png";
})
portraitTwo.addEventListener('mouseleave',() =>{
portraitTwo.src = "./assets/img-team/PortraitFour.png";
})
portraitThree.addEventListener('mouseenter', () => {
  portraitThree.src = "./assets/citys/Saint-Aubin.png";
})
portraitThree.addEventListener('mouseleave',() =>{
portraitThree.src = "./assets/img-team/PortraitThree.png";
})
portraitFour.addEventListener('mouseenter', () => {
  portraitFour.src = "./assets/citys/Saint-Aubin.png";
})
portraitFour.addEventListener('mouseleave',() =>{
portraitFour.src = "./assets/img-team/PortraitSix.png";
})
portraitFive.addEventListener('mouseenter', () => {
  portraitFive.src = "./assets/citys/Saint-Aubin.png";
})
portraitFive.addEventListener('mouseleave',() =>{
portraitFive.src = "./assets/img-team/portraitTwo.png";
})

}

portraitMoove()

/***Contact***/

const message =
  " Merci d'avoir envoyé votre demande. Votre demande sera traité dans les meilleurs délai. ";
    document.getElementById("contactform")
    document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


const periode = document.getElementById('periode').value;

  function Tarif() {
    switch (periode) {
        case "Janvier à Mars":
            return "200€";
        case "Avril à Juin":
            return "600€";
        case "Juillet à Septembre":
            return "800€"
        case "Octobre à Décembre":
            return "500€"
        default :
            return "Invalid";
    }
}
console.log(Tarif());

/***Feedback***/

function button() {

    let div = document.querySelectorAll('.hidden-global-feedbacks');
    for (let i = 0; i < div.length; i++) {
        div[i].style.display === 'none';

        if (div[i].style.display === "none") {
            div[i].style.display = "flex";
        } else {
            div[i].style.display = "none";
        }
    }
}

