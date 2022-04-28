function dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}
// human constructor
function human (name, weight, height, diet){
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  }
  //form reset
  const clearScreen = (ref) => {
  ref.remove();
  }
  const formRef = document.getElementById("dino-compare");
  const compareMeButtonRef = document.getElementById("btn");
  compareMeButtonRef.addEventListener("click",()=> clearScreen(formRef));
  
