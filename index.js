let a1=Math.floor(Math.random()*6) +1;
let ranImage1="img/d"+a1+".jpg";
let a2=Math.floor(Math.random()*6) +1;
let ranImage2="img/d"+a2+".jpg";
let img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", ranImage1);
let img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", ranImage2);
if(a1>a2){
	document.getElementById("firstline").innerHTML="<h1>player 1 wins !<h1>"
}
else if(a2>a1){
	document.getElementById("firstline").innerHTML="<h1>player 2 wins !<h1>"
}
else
document.getElementById("firstline").innerHTML="<h1>draw!<h1>"