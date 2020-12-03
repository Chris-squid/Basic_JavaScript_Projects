//CALL LOOP FUNCTION//
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//STR>LENGTH FUNCTION//
function Fun_length() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

//FOR LOOP FUNCTION//
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";    
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//ARRAY CALL FUNCTION//
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + "." ;
}

//CONST KEYWORDS//
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//LET//CORRECT//
var X = 82;
document.write(X);
{
    let X = 33;
    document.write( "<br>" + X);
}
document.write( "<br>" + X);

//RETURN FUNCTION
function pI() {
    return Math.PI;

}
document.getElementById("demo").innerHTML = pI();


