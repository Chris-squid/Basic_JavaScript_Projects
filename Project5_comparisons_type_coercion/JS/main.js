document.write(typeof "Word"); // typeof and its uses

document.write(typeof 3);

function my_Function() {       // true and false + booleans
    document.getElementById("Test").innerHTML = 4/7;
}

function my_function() {
    document.getElementById("test").innerHTML = isNaN('This is a string');
}

function funktion() {
    document.getElementById("yo").innerHTML = isNaN('007');
}

function nope() {
    document.getElementById("NaN").innerHTML = 0/0;
}

document.write(2E310) //Console logs, infinity (+, -) Greater less than checks/DEVTOOLS 

document.write(-3E310)

document.write(10 < 2);

document.write(10 > 2);

console.log(2 + 2);

document.write("10" + 5);

console.log(2 > 10);

document.write(10 == 10);    // equality Checks and comps

document.write(3 == 11);

X = 10;
Y = 10;
document.write(X === Y);

X = 82;
Y = "82";
document.write(X === Y);

A = "Bingo";
B = "BINGo";                 // triple equal sign comps (===)
document.write(A === B);

A = "Magnus";
B = "Mognus";
document.write(A === B);

document.write(5 > 2 && 10 > 4); //Logic comparisons + booleans

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {   // Not OPS Section
    document.getElementById("Not").innerHTML = !(20 >10);
}

function double_not() {
    document.getElementById("double").innerHTML = !(5 > 10);
}