
/***arrow-up***/

const arrow = document.querySelector("#arrow-upping");

arrow.addEventListener('click', ()=>{
  window.scroll({
    top:0,
    behavior: 'smooth'  
  });

})


/***Home Feedbacks */


function button() {

  const button = document.querySelector(".button-feedback");

    let div = document.querySelectorAll('.hidden-global-feedbacks');
    for (let i = 0; i < div.length; i++) {
        
        if (div[i].style.display === "flex") {
            div[i].style.display = "none";
        } else {
            div[i].style.display = "flex";
            button.style.display ='none';

        }
              
    }
}






