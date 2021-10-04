
/***arrow-up***/

const arrow = document.querySelector("#arrow-upping");

arrow.addEventListener('click', ()=>{
  window.scroll({
    top:0,
    behavior: 'smooth'  
  });

})


/***Contact***/

const message =
  " Merci d'avoir envoyé votre demande. Votre demande sera traité dans les meilleurs délai. ";
    document.getElementById("contactform")
    document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


  /***/
  let periode = document.querySelector('#periode');

  periode.addEventListener('change', (event)=>{
    event.target.value 


      /*switch version*/

      
    switch (periode.value){
    case 'periode1':
      console.log('3000 €');
    break
      case 'periode2':
        console.log('6000 €');
      break;
        case 'periode3':
          console.log('9000 €');
        break
          case 'periode4':
            console.log('10.000 €');
          break
    default: console.log('Please select period');
      break;
  }
  })



/***Home Feedbacks */
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


