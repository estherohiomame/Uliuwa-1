document.querySelector('.icon-three').addEventListener("click", function() {
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

 var thisYear = new Date().getFullYear();
 document.getElementById("year").innerHTML = thisYear;