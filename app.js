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

function populateTiles() {
  for (let i = 0; i < 9; i++){
    console.log("Apples")
  }
  // create a tileDiv that creates a new div element
  // access the grid item on the page
  // for 9 titles, append the titleDiv to the grid
  
}

button.addEventListener("click", () => {
  console.log(getHumanData());
  clearScreen(formRef);
  populateTiles()
});
