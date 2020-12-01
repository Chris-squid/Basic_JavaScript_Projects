function displayDate() {      //Added an event Clock and used id and .getElement
    document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
    var sentence = "I am learning";                /// Made a Function with the += operater to use HTML element to cal and display the function
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}