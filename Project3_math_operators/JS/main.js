function add() {     //MATH FUNCTIONS AND .getElementbyID +ADDITION
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function sub() {
    var Subtraction = 5 - 2;  // SUB
    document.getElementById("math").innerHTML = "5 - 2 " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;   // MULTIPLICATION
    document.getElementById("multi").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {        // DIVISION
    var simple_Math = 46 / 6;
    document.getElementById("div").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {  //COMBOS AND RETURN
    var simple_Math = (1 +2) * 10 / 2 -5;
    document.getElementById("more").innerHTML = "1 plus 2, multiplied by 10, divided in half and the subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {  
    var simple_Math = 25 % 6;
    document.getElementById("modop").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
    
}

function negation_Operator() {
    var x = 10;
    document.getElementById("negop").innerHTML = -x;
}

var X = 5; 
X++;
document.write(X);


var X = 5.25; 
X--;
document.write(X);

window.alert(Math.random() * 100);

function stuff() {
    document.getElementById("demo").innerHTML = Math.PI;
}

// SIMPLE EXAMPLES OF JAVASCRIPT MATH OBJECTS AND THEIR USES