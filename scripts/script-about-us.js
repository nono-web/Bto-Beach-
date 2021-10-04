/**Portraits */

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

