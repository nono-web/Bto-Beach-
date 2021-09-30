
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

