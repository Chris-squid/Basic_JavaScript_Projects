//CONCATENATE//
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//SLICE//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//UPPERCASE()
function upFunction() {
    var text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.toUpperCase();
    
}
//SEARCH()
function locate() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.search("locate");
    document.getElementById("find").innerHTML = pos;
}

//NUMBER METHODS//
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//TOPRECISION() METHOD//
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
    
}

//FIXED()//
function fix() {
    var str = "Hello World!";
    var result = str.fixed();
    document.getElementById("tele").innerHTML = result;
    
}

//ValueOF()//
function values() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Val").innerHTML = res;
    
}
