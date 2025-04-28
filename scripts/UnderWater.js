var coloursUW=new Array("#fff", "#999", "#222", "#555", "#333");
var bubblesUW=66;
var over_or_underUW="over";

/***************************\
*   Rainy Afternoon Effect  *
*(c)2011-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
\***************************/

var xUW=oxUW=400;
var yUW=oyUW=300;
var swideUW=800;
var shighUW=600;
var sleftUW=sdownUW=0;
var bubbUW=new Array();
var bubbxUW=new Array();
var bubbyUW=new Array();
var bubbsUW=new Array();
var splooshUW=false;

function addLoadEventUW(funkyUW) {
  var oldonloadUW=window.onload;
  if (typeof(oldonloadUW)!='function') window.onload=funkyUW;
  else window.onload=function() {
    if (oldonloadUW) oldonloadUW();
    funkyUW();
  }
}

addLoadEventUW(bubleUW);

function bubleUW() {
  if (document.getElementById) {
    var iUW, ratsUW, divUW;
    for (iUW=0; iUW<bubblesUW; iUW++) {
      ratsUW=createDivUW("3px", "3px");
      ratsUW.style.visibility="hidden";
      ratsUW.style.zIndex=(over_or_underUW=="over")?"1001":"0";

      divUW=createDivUW("auto", "auto");
      ratsUW.appendChild(divUW);
      divUW=divUW.style;
      divUW.top="1px";
      divUW.left="0px";
      divUW.bottom="1px";
      divUW.right="0px";
      divUW.borderLeft="1px solid "+coloursUW[3];
      divUW.borderRight="1px solid "+coloursUW[1];

      divUW=createDivUW("auto", "auto");
      ratsUW.appendChild(divUW);
      divUW=divUW.style;
      divUW.top="0px";
      divUW.left="1px";
      divUW.right="1px";
      divUW.bottom="0px";
      divUW.borderTop="1px solid "+coloursUW[0];
      divUW.borderBottom="1px solid "+coloursUW[2];

      divUW=createDivUW("auto", "auto");
      ratsUW.appendChild(divUW);
      divUW=divUW.style;
      divUW.left="1px";
      divUW.right="1px";
      divUW.bottom="1px";
      divUW.top="1px";
      divUW.backgroundColor=coloursUW[4];
      if (navigator.appName=="Microsoft Internet Explorer") divUW.filter="alpha(opacity=50)";
      else divUW.opacity=0.5;
      document.body.appendChild(ratsUW);
      bubbUW[iUW]=ratsUW.style;
    }
    set_scrollUW();
    set_widthUW();
    bubbleUW();
  }
}

function bubbleUW() {
  var cUW;
  if (Math.abs(xUW-oxUW)>1 || Math.abs(yUW-oyUW)>1) {
    oxUW=xUW;
    oyUW=yUW;
    for (cUW=0; cUW<bubblesUW; cUW++) if (!bubbyUW[cUW]) {
      bubbUW[cUW].left=(bubbxUW[cUW]=xUW)+"px";
      bubbUW[cUW].top=(bubbyUW[cUW]=yUW-3)+"px";
      bubbUW[cUW].width="3px";
      bubbUW[cUW].height="3px";
      bubbUW[cUW].visibility="visible";
      bubbsUW[cUW]=3;
      break;
    }
  }
  for (cUW=0; cUW<bubblesUW; cUW++) if (bubbyUW[cUW]) update_bubbUW(cUW);
  setTimeout("bubbleUW()", 40);
}

document.onmousedown=splashUW;
document.onmouseup=function(){clearTimeout(splooshUW);};

function splashUW() {
  oxUW=-1;
  oyUW=-1;
  splooshUW=setTimeout('splashUW()', 100);
}

function update_bubbUW(iUW) {
  if (bubbyUW[iUW]) {
    bubbyUW[iUW]-=bubbsUW[iUW]/2+iUW%2;
    bubbxUW[iUW]+=(iUW%5-2)/5;
    if (bubbyUW[iUW]>sdownUW && bubbxUW[iUW]>sleftUW && bubbxUW[iUW]<sleftUW+swideUW+bubbsUW[iUW]) {
      if (Math.random()<bubbsUW[iUW]/shighUW*2 && bubbsUW[iUW]++<8) {
        bubbUW[iUW].width=bubbsUW[iUW]+"px";
        bubbUW[iUW].height=bubbsUW[iUW]+"px";
      }
      bubbUW[iUW].top=bubbyUW[iUW]+"px";
      bubbUW[iUW].left=bubbxUW[iUW]+"px";
    }
    else {
      bubbUW[iUW].visibility="hidden";
      bubbyUW[iUW]=0;
      return;
    }
  }
}

document.onmousemove=mouseUW;
function mouseUW(eUW) {
  if (eUW) {
    yUW=eUW.pageY;
    xUW=eUW.pageX;
  }
  else {
    set_scrollUW();
    yUW=event.y+sdownUW;
    xUW=event.x+sleftUW;
  }
}

window.onresize=set_widthUW;
function set_widthUW() {
  var sw_minUW=999999;
  var sh_minUW=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_minUW=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_minUW=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_minUW) sw_minUW=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_minUW) sh_minUW=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_minUW) sw_minUW=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_minUW) sh_minUW=document.body.clientHeight;
  }
  if (sw_minUW==999999 || sh_minUW==999999) {
    sw_minUW=800;
    sh_minUW=600;
  }
  swideUW=sw_minUW;
  shighUW=sh_minUW;
}

window.onscroll=set_scrollUW;
function set_scrollUW() {
  if (typeof(self.pageYOffset)=='number') {
    sdownUW=self.pageYOffset;
    sleftUW=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdownUW=document.body.scrollTop;
    sleftUW=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleftUW=document.documentElement.scrollLeft;
    sdownUW=document.documentElement.scrollTop;
  }
  else {
    sdownUW=0;
    sleftUW=0;
  }
}

function createDivUW(heightUW, widthUW) {
  var divUW=document.createElement("div");
  divUW.style.position="absolute";
  divUW.style.height=heightUW;
  divUW.style.width=widthUW;
  divUW.style.overflow="hidden";
  divUW.style.backgroundColor="transparent";
  return (divUW);
}
