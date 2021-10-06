window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollRight || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 195; /* renvoi au max a 195% element.style width */
  document.getElementById("myBar").style.width = scrolled + "%";
}