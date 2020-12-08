function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function validateForm() {
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + "universe!");
}