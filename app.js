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
  let dinoArr = [];
  fetch("dino.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.Dinos.forEach(dino =>{
        let dinoObj = new dinosaur(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)
        dinoArr.push(dinoObj)
      })
    });
  return dinoArr;
}
console.log(fetchData());

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
