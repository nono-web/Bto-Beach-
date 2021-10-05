
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


