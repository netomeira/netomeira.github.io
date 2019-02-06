function myFunction() {
    var x = document.getElementById("hideShow");
    var y = document.getElementById("hideShow2");
    var el = document.getElementById("titulo1");
    var el2 = document.getElementById("titulo2");

    if (x.style.display === "none") {
      if(y.style.display != "none"){
          $("#hideShow").fadeIn(2000);
          document.getElementById("dropImg").src = "images/down.png";
          el.classList.add("ativo");

          document.getElementById("dropImg2").src = "images/right.png";
          $("#hideShow2").hide(500);
          el2.classList.remove("ativo");
      }else{
          $("#hideShow").fadeIn(2000);
          document.getElementById("dropImg").src = "images/down.png";
          el.classList.add("ativo");
      }
    } else {
        $("#hideShow").hide(500);
        document.getElementById("dropImg").src = "images/right.png";
        el.classList.remove("ativo");
    }
  }

  function myFunction2() {
    var x = document.getElementById("hideShow2");
    var y = document.getElementById("hideShow");
    var el = document.getElementById("titulo2");
    var el2 = document.getElementById("titulo1");

    if (x.style.display === "none") {
      if(y.style.display != "none"){
        $("#hideShow2").fadeIn(2000);
        document.getElementById("dropImg2").src = "images/down.png";
        el.classList.add("ativo");

        document.getElementById("dropImg").src = "images/right.png";
        $("#hideShow").hide(500);
        el2.classList.remove("ativo");
      }else{
        $("#hideShow2").fadeIn(2000);
        document.getElementById("dropImg2").src = "images/down.png";
        el.classList.add("ativo");
      }
    } else {
        $("#hideShow2").hide(500);
        document.getElementById("dropImg2").src = "images/right.png";
        el.classList.remove("ativo");
    }
  }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

