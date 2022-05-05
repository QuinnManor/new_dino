const button = document.getElementById("btn");
const formRef = document.getElementById("dino-compare");
const clearScreen = (ref) => {
  ref.remove();
};

function dinosaur(species, weight, height, diet, where, when, fact) {
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

function fetchData() {
  fetch("dino.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data));
}

function getHumanData() {
  return (function () {
    const humanName = document.getElementById("name").value;
    const humanFeet = document.getElementById("feet").value;
    const humanInches = document.getElementById("inches").value;
    const humanWeight = document.getElementById("weight").value;
    const humanDiet = document.getElementById("diet").value;
    let height = parseInt(humanFeet) * 12 + parseInt(humanInches);

    return new human(humanName, humanWeight, height, humanDiet);
  })();
}

button.addEventListener("click", () => {
  console.log(getHumanData());
  clearScreen(formRef);
});


//Used card DI-10 as a referance point, honestly for the sake of clarity/keeping things clean it might be best for us to just merge the height, weight, and diet into one function. Though I don't know if that'd be best for functionality.
function heightDifference(){
  return (dinosaur.height - height);
}
console.log(heightDifference);

function dietDifference(){
  return (dinosaur.diet - humanDiet);
}
console.log(dietDifference);