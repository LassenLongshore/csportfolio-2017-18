//loads all of the buttons, inputs, etc. from the HTML so that the Javascript can be applied to them
var weekInput = document.getElementById("weekInput");
var weekInputButton = document.getElementById("weekInputButton");
var dayInput = document.getElementById("dayInput");
var typeSelector = document.getElementById("typeSelector");
var position = document.getElementById("position");
var dayInputButton = document.getElementById("dayInputButton");
var weekTitle = document.getElementById("weekTitle");
//loads all of the ids for the cells in the calendar
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var m5 = document.getElementById("m5");
var m6 = document.getElementById("m6");

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");

var w1 = document.getElementById("w1");
var w2 = document.getElementById("w2");
var w3 = document.getElementById("w3");
var w4 = document.getElementById("w4");
var w5 = document.getElementById("w5");
var w6 = document.getElementById("w6");

var th1 = document.getElementById("th1");
var th2 = document.getElementById("th2");
var th3 = document.getElementById("th3");
var th4 = document.getElementById("th4");
var th5 = document.getElementById("th5");
var th6 = document.getElementById("th6");

var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");

var sa1 = document.getElementById("sa1");
var sa2 = document.getElementById("sa2");
var sa3 = document.getElementById("sa3");
var sa4 = document.getElementById("sa4");
var sa5 = document.getElementById("sa5");
var sa6 = document.getElementById("sa6");

var su1 = document.getElementById("su1");
var su2 = document.getElementById("su2");
var su3 = document.getElementById("su3");
var su4 = document.getElementById("su4");
var su5 = document.getElementById("su5");
var su6 = document.getElementById("su6");
//checks if the week input button is clicked, and changes the week title to whatever is in the week input
weekInputButton.addEventListener("click", function(){
    weekTitle.innerHTML = '<h2>' + weekInput.value + '</h2>';
});
//checks if the day input button is clicked
dayInputButton.addEventListener("click", function(){
    //checks the selections for the day of the week and position of the calendar
    if (typeSelector.value === "monday" && position.value === "1"){
        //then changes the position of that cell in the calendar to whatever is in the input box
        m1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "monday" && position.value === "2"){
        m2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "monday" && position.value === "3"){
        m3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "monday" && position.value === "4"){
        m4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "monday" && position.value === "5"){
        m5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "monday" && position.value === "6"){
        m6.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "tuesday" && position.value === "1"){
        t1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "tuesday" && position.value === "2"){
        t2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "tuesday" && position.value === "3"){
        t3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "tuesday" && position.value === "4"){
        t4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "tuesday" && position.value === "5"){
        t5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "tuesday" && position.value === "6"){
        t6.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "wednesday" && position.value === "1"){
        w1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "wednesday" && position.value === "2"){
        w2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "wednesday" && position.value === "3"){
        w3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "wednesday" && position.value === "4"){
        w4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "wednesday" && position.value === "5"){
        w5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "wednesday" && position.value === "6"){
        w6.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "thursday" && position.value === "1"){
        th1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "thursday" && position.value === "2"){
        th2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "thursday" && position.value === "3"){
        th3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "thursday" && position.value === "4"){
        th4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "thursday" && position.value === "5"){
        th5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "thursday" && position.value === "6"){
        th6.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "friday" && position.value === "1"){
        f1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "friday" && position.value === "2"){
        f2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "friday" && position.value === "3"){
        f3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "friday" && position.value === "4"){
        f4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "friday" && position.value === "5"){
        f5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "friday" && position.value === "6"){
        f6.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "saturday" && position.value === "1"){
        sa1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "saturday" && position.value === "2"){
        sa2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "saturday" && position.value === "3"){
        sa3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "saturday" && position.value === "4"){
        sa4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "saturday" && position.value === "5"){
        sa5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "saturday" && position.value === "6"){
        sa6.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "sunday" && position.value === "1"){
        su1.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "sunday" && position.value === "2"){
        su2.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "sunday" && position.value === "3"){
        su3.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "sunday" && position.value === "4"){
        su4.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "sunday" && position.value === "5"){
        su5.innerHTML = dayInput.value;
    }
    if (typeSelector.value === "sunday" && position.value === "6"){
        su6.innerHTML = dayInput.value;
    }
})