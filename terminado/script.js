table.onmouseover = function(event) {
    let target = event.target;
    let clase1 = event.target.classList.contains('img1');
    let clase2 = event.target.classList.contains('img2');
    let clase3 = event.target.classList.contains('img3');
    let clase4 = event.target.classList.contains('img4');
    let clase5 = event.target.classList.contains('img5');

    if (clase1 == true){
      target.style.width = "100px";
      target.style.height = "100px";
      document.getElementById("img2").style.width = "75px";
      document.getElementById("img2").style.height = "75px";
    }
    if (clase2 == true){
      target.style.width = "100px";
      target.style.height = "100px";
      document.getElementById("img1").style.width = "75px";
      document.getElementById("img1").style.height = "75px";
      document.getElementById("img3").style.width = "75px";
      document.getElementById("img3").style.height = "75px";
    }
    if (clase3 == true){
      target.style.width = "100px";
      target.style.height = "100px";
      document.getElementById("img2").style.width = "75px";
      document.getElementById("img2").style.height = "75px";
      document.getElementById("img4").style.width = "75px";
      document.getElementById("img4").style.height = "75px";
    }
    if (clase4 == true){
      target.style.width = "100px";
      target.style.height = "100px";
      document.getElementById("img3").style.width = "75px";
      document.getElementById("img3").style.height = "75px";
      document.getElementById("img5").style.width = "75px";
      document.getElementById("img5").style.height = "75px";
    }
    if (clase5 == true){
      target.style.width = "100px";
      target.style.height = "100px";
      document.getElementById("img4").style.width = "75px";
      document.getElementById("img4").style.height = "75px";
    }

    target.style.width = "100px";
    target.style.height = "100px";
  };
  
  table.onmouseout = function(event) {
    let target = event.target;
    document.getElementById("img1").style.width = "50px";
    document.getElementById("img1").style.height = "50px";
    document.getElementById("img2").style.width = "50px";
    document.getElementById("img2").style.height = "50px";
    document.getElementById("img3").style.width = "50px";
    document.getElementById("img3").style.height = "50px";
    document.getElementById("img4").style.width = "50px";
    document.getElementById("img4").style.height = "50px";
    document.getElementById("img5").style.width = "50px";
    document.getElementById("img5").style.height = "50px";
  };