window.onscroll = function() {myFunction()};

function myFunction() {
  const winScroll = document.body.scrollRight || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 195; /* renvoi au max a 195% element.style width */
  document.getElementById("myBar").style.width = scrolled + "%";
}