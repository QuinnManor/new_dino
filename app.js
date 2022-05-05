function Dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

function human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}


function fetchData(){
  fetch('dino.json')
    .then(response => {
      return response.json(); 
    })
    .then((data) => console.log(data))
}
fetchData(); 

