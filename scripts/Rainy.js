var speedR=33; // lower number for faster
var dropsR=100; // number of 'drops'
var colourR="#000"; // colour of drops (generally grey!)

var flksR=new Array();
var flkxR=new Array();
var flkyR=new Array();
var fldyR=new Array();
var swideR, shighR, boddieR;
var ie_versionR=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;

function addLoadEventR(funkyR) {
  var oldonloadR=window.onload;
  if (typeof(oldonloadR)!='function') window.onload=funkyR;
  else window.onload=function() {
    if (oldonloadR) oldonloadR();
    funkyR();
  }
}

addLoadEventR(stormR);

function stormR() {
  if (document.getElementById) {
    var r1R, r2R;
    boddieR=document.createElement("div");
    boddieR.style.position="fixed";
    boddieR.style.top="0px";
    boddieR.style.left="0px";
    boddieR.style.width="1px";
    boddieR.style.height="1px";
    boddieR.style.overflow="visible";
    boddieR.style.backgroundColor="transparent";
    document.body.appendChild(boddieR);
    set_widthR();
    for (var iR=0; iR<dropsR; iR++) {
      flksR[iR]=createDivR(16, 2, "transparent");
      r1R=createDivR(6, 2, colourR);
      r1R.style.top="10px";
      r1R.style.left="0px";
      flksR[iR].appendChild(r1R);
      r2R=createDivR(10, 2, colourR);
      r2R.style.top="0px";
      r2R.style.left="0px";
      if (ie_versionR && ie_versionR<10) r2R.style.filter="alpha(opacity=25)";
      else r2R.style.opacity=0.25;
      flksR[iR].appendChild(r2R);
      flkxR[iR]=2*Math.floor(Math.random()*swideR/2);
      flkyR[iR]=Math.floor(Math.random()*shighR);
      fldyR[iR]=2+Math.floor(Math.random()*4);
      flksR[iR].style.left=flkxR[iR]+"px";
      flksR[iR].style.top=flkyR[iR]+"px";
      boddieR.appendChild(flksR[iR]);
    }
    setInterval("cats_and_dogsR()", speedR);
  }
}

function createDivR(heightR, widthR, colourR) {
  var divR=document.createElement("div");
  divR.style.position="absolute";
  divR.style.height=heightR+"px";
  divR.style.width=widthR+"px";
  divR.style.overflow="hidden";
  divR.style.backgroundColor=colourR;
  return divR;
}

window.onresize=set_widthR;
function set_widthR() {
  var sw_minR=999999;
  var sh_minR=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    sw_minR=document.documentElement.clientWidth;
    sh_minR=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)!="undefined" && self.innerWidth) {
    if (self.innerWidth<sw_minR) sw_minR=self.innerWidth;
    if (self.innerHeight<sh_minR) sh_minR=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth<sw_minR) sw_minR=document.body.clientWidth;
    if (document.body.clientHeight<sh_minR) sh_minR=document.body.clientHeight;
  }
  if (sw_minR==999999 || sh_minR==999999) {
    sw_minR=800;
    sh_minR=600;
  }
  swideR=sw_minR-2;
  shighR=sh_minR;
}

function cats_and_dogsR(cR) {
  var iR, xR, oR=0;
  for (iR=0; iR<dropsR; iR++) {
    flkyR[iR]+=fldyR[iR];
    if (flkyR[iR]>=shighR-16) {
      flkyR[iR]=-16;
      fldyR[iR]=2+Math.floor(Math.random()*4);
      flkxR[iR]=2*Math.floor(Math.random()*swideR/2);
      flksR[iR].style.left=flkxR[iR]+"px";
    }
    flksR[iR].style.top=flkyR[iR]+"px";
  }
}