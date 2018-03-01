/* global draw ellipse rect p processing width height size background Processing fill drawFace mouseClicked mouseX mouseY*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
mouseClicked = function() {
    drawFace(mouseX, mouseY);
}
drawFace = function(x, y) {
    fill(153, 130, 84);
    //face
    ellipse(x, y, 64, 64);
    fill(0, 255, 0);
    //left eye
    ellipse(x - 10, y - 10, 12, 12);
    //right eye
    ellipse(x + 10, y - 10, 12, 12);
    fill(1, 1, 1);
    //mouth
    ellipse(x, y + 15, 20, 12);
    
}

draw = function() {
    
    
};    
    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
