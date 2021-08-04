var value;
var hover = document.getElementsByClassName('hexagon');

for (var i = 0; i < hover.length; i++) {
  hover[i].onmouseover = mouseOver;
//   hover[i].onmouseout = mouseOut;
}

// onmouseover="mouseOver()" onmouseout="setTimeout(mouseOut, 1000)"
function mouseOver() {
    this.style.backgroundColor ='#837C93';
  }