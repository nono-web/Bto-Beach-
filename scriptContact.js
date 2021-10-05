/***Contact***/
const message =
  " 👍 Merci d'avoir envoyé votre demande. Votre demande sera traité dans les meilleurs délai. 👍";
    document.querySelector("#contactform");
    document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


  let periode = document.querySelector('#periode');

  periode.addEventListener('change', (event)=>{
    event.target.value 

    switch (periode.value){
    case 'periode1':
      alert('🚢 Pour cette periode le prix sera de : 3000 € 🚢');
    break
      case 'periode2':
        alert('🚢 Pour cette periode le prix sera de : 6000 € 🚢');
      break;
        case 'periode3':
          alert('🚢 Pour cette periode le prix sera de : 9000 € 🚢 ');
        break
          case 'periode4':
            alert('🚢 Pour cette periode le prix sera de : 10000 € 🚢'); 
          break
    default: alert('🚢 Please select period 🚢');
      break;
  }
  })

  
  
