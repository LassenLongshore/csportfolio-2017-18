/* global draw ellipse rect p processing width height size background Processing random fill strokeWeight stroke line*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(random(255), random(255), random(255));
for (var i = 1; i < width; i = i + 16) {
    
        for (var j = 1; j < width; j = j + 16) {
        
        //line(random(00, 400), random(00, 400), random(00, 400), random(00, 400));
        //ellipse(i, j, random(16), random(16));
        rect(i, j, random(16), random(16));
        //fill(random(0), random(255), random(0));
        //strokeWeight(random(5));
        stroke(random(255), random(255), random(255));
        }
    
    }
draw = function() {
    
   
    
};
// o°º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);