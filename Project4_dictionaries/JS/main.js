function my_Dictionary() { // Dictionary KVP animal=Cat
    var Animal = {
        Species:"Cat",
        Color:"Black",
        Breed:"Tabby",
        Age:12,
        Sound:"Meow!"
    };
    delete Animal.Age; // Deleted Age to show Undefined remark
    document.getElementById("Dictionary").innerHTML = Animal.Sound + Animal.Age + Animal.Breed; // Results shown+ deleted object + extra 
}