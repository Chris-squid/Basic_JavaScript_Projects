function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"Black",
        Breed:"Tabby",
        Age:12,
        Sound:"Meow!"
    };
    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML = Animal.Sound + Animal.Age + Animal.Breed;
}