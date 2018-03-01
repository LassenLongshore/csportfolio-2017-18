/* global draw ellipse rect p processing width height size background fill stroke strokeWeight Processing*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var SW = 0;
var Stroke = 1;
draw = function() {
//top circle
fill(255, 0, 0);
stroke(5, 5, 5);
strokeWeight(5);
ellipse(xPos, yPos, 60, 60);
//bottom circle
fill(255, 0, 0);
stroke(0, 255, 0);
strokeWeight(5);
ellipse(00 + xPos, 400 - yPos, 60, 60);
//y middle circle
fill(255, 0, 0);
stroke(0, 255, 0);
strokeWeight(10);
ellipse(xPos, 200, 60, 60);
//x middle circle
fill(0, 255, 0);
stroke(255, 0, 0);
strokeWeight(5);
ellipse(200, yPos, 60, 60);
//variable changers
xPos = xPos + 20;
yPos = yPos + 20;
SW = SW + 1;
Stroke = Stroke + 50;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);