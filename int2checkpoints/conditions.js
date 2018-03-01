/* global draw ellipse rect p processing width height size mouseX mouseY stroke strokeWeight fill processing background*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var size = 30;
draw = function() {
//creates the ellipse
ellipse(mouseX, mouseY, size, size);
//changes border color to red if x>200
if (mouseX > 200){
    stroke(255, 0, 0);
    fill(0, 0, 0);
}
else{
    stroke(0, 0, 0);
    fill(100, 50, 25);
}
if (mouseY > 200){
    strokeWeight(5);
    fill(24, 103, 124);
}
else{
    strokeWeight(1);
    fill(26, 54, 191);
}
if (mouseY > 200){
    size = 60;
}
else{
    size = 30;
}
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
