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
