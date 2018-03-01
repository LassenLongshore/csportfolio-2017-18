/* global draw ellipse rect p processing width height size background Processing fill strokeWeight stroke mouseX mouseY drawSquares mouseClicked mouseMoved random squareDelete*/

var sketch = function(processing) {with(processing) {size(400, 400);background(255);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//




//the function that determines what the black squares look like
drawSquares = function(x, y){
    stroke(0, 0, 0);
    fill(0, 0, 0);
    rect(x, y, 28.4, 28.4);
};
mouseMoved = function() {
    
    var tempX = Math.floor(random(0, 14)) * 28.4
    var tempY = Math.floor(random(0, 14)) * 28.4
    //makes it so that whenever the mouse moves on the canvas, the drawSquares function is used at a random square
    drawSquares(tempX, tempY);
    
    setTimeout(function(){
        //makes borders around squares white
        // stroke(255, 255, 255);
        //orange squares
            if (tempX >= 190){
                fill(255, 200, 145);
                stroke(255, 200, 145);
            }
            //blue squares
            if (tempY >= 190){
                fill(145, 200, 255);
                stroke(145, 200, 255);
            }
            //green squares
            if (tempX < 190){
                fill(200, 255, 145);
                stroke(200, 255, 145);
            }
            //yellow squares
            if (tempY > 190 && tempX < 190){
                fill(255, 250, 173);
                stroke(255, 250, 173);
            }
    //creates squares
    rect(tempX, tempY, 28.4, 28.4);
    //borders around squares
    strokeWeight(0);
    }, 1000);
    
    
};
//recreates squares all over the page
//checks if width is less than 0, and if it is, it adds a line 28.4pixels to the right
for (var i = 0; i < width; i = i + 28.4) {
//same as above but with width
    for (var j = 0; j < width; j = j + 28.4) {
            //orange squares
            if (i >= 190){
                fill(255, 200, 145);
                stroke(255, 200, 145);
            }
            //blue squares
            if (j >= 190){
                fill(145, 200, 255);
                stroke(145, 200, 255);
            }
            //green squares
            if (i < 190){
                fill(200, 255, 145);
                stroke(200, 255, 145);
            }
            //yellow squares
            if (j > 190 && i < 190){
                fill(255, 250, 173);
                stroke(255, 250, 173);
            }
    //creates squares
    rect(i, j, 28.4, 28.4);
    //borders around squares
    strokeWeight(0);
    //makes borders around squares white
    stroke(255, 255, 255);
    }
}
draw = function() {
    
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//
}};var p = new Processing(document.getElementById("output-canvas"), sketch);