function refAmh(){
  window.location="Amh_GoDe.html"
}
function refEng(){
  window.location="Eng_GoDe.html"
}
function refOro(){
  window.location="Oro_GoDe.html"
}
var acc = document
.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
 acc[i].onclick = function(){
  this.classList.toggle("active");
  this.nextElementSibling.classList
  .toggle("show");
  }
}


function openNav() {
 document.getElementById("myNav")
 .style.width = "100%";
}

function closeNav() {
 document.getElementById("myNav")
 .style.width = "0%";
}

function infoEng(){
  alert("If You Want To Change The Language, Double Click On The Language You Want. Or You Click On Tools And Change The Language.")
}
function toEng(){
  window.location="Eng_GoDe.html"
}
function infoAmh(){
  alert("ቋንቋ ለመቀየር ከፈለጉ የሚፈልጉት ቋንቋ ላይ ሁለቴ ይንኩት [Double Click ያድርጉ]። ወይም Tools ውስጥ ገብተው ቋንቋ ይቀይሩ።")
}
function toAmh(){
  window.location="Amh_GoDe.html"
}
function infoOro(){
  alert("If You Went To Chenge The Language Click On Your Option. Or You click to")
}
function toOro(){
  window.location="Oro_GoDe.html"
}
/*function index(){
  window.location="index.html"
}*/
function index(){
  var ind = confirm("You Want Go To Home Page?")
  if (ind == true){
    window.location="index.html"
  }
}