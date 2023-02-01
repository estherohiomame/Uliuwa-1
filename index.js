document.querySelector('.icon-three').addEventListener("click", function() {
   document.querySelector('.icon-three').classList.toggle('active-three');
   document.querySelector('#navlist').classList.toggle('show');
});

document.querySelector('.navlink').addEventListener("click", function() {
    document.querySelector('.icon-three').classList.toggle('active-three');
    document.querySelector('#navlist').classList.toggle('show');
});

document.querySelector('.navlinks').addEventListener("click", function() {
   document.querySelector('.icon-three').classList.toggle('active-three');
   document.querySelector('#navlist').classList.toggle('show');
});

function showExh1() {
    document.getElementById('exhibitions1').style.display = "block";
    document.getElementById('exhibitions0').style.display = "none";
    document.getElementById('exhibitions2').style.display = "none";
 }
 
 function showExh() {
    document.getElementById('exhibitions0').style.display = "block";
    document.getElementById('exhibitions1').style.display = "none";
    document.getElementById('exhibitions2').style.display = "none";
 }
     
 function showExh2() {
    document.getElementById('exhibitions2').style.display = "block";
    document.getElementById('exhibitions0').style.display = "none";
    document.getElementById('exhibitions1').style.display = "none";
 }
function showAbout() {
   const about = document.getElementById('about');
   about.scrollIntoView;
}
 var thisYear = new Date().getFullYear();
 document.getElementById("year").innerHTML = thisYear;

  $("a").creep({
    speed: 2000
  });
  function showImg1() {
   document.querySelector("#img5").style.display = "none";
   document.querySelector("#img1").style.display = "block";
   document.querySelector("#img2").style.display = "none";
   document.querySelector("#img3").style.display = "none";
   document.querySelector("#img4").style.display = "none";
}

  function showImg2() {
        document.querySelector("#img2").style.display = "block";
        document.querySelector("#img1").style.display = "none";
        document.querySelector("#img3").style.display = "none";
        document.querySelector("#img4").style.display = "none";
        document.querySelector("#img5").style.display = "none";
    }

    function showImg3() {
      document.querySelector("#img3").style.display = "block";
      document.querySelector("#img1").style.display = "none";
      document.querySelector("#img2").style.display = "none";
      document.querySelector("#img4").style.display = "none";
      document.querySelector("#img5").style.display = "none";
  }

  function showImg4() {
   document.querySelector("#img4").style.display = "block";
   document.querySelector("#img1").style.display = "none";
   document.querySelector("#img2").style.display = "none";
   document.querySelector("#img3").style.display = "none";
   document.querySelector("#img5").style.display = "none";
}

function showImg5() {
   document.querySelector("#img5").style.display = "block";
   document.querySelector("#img1").style.display = "none";
   document.querySelector("#img2").style.display = "none";
   document.querySelector("#img3").style.display = "none";
   document.querySelector("#img4").style.display = "none";
}