// import { dinos } from './../data/dinoData.js';

let dinos = [
  {
    id: "dino1",
    name: "Boris",
    age: 12,
    type: "philovenator",
    diet: "omnivore",
    hp: 65,
    adventures: [],
    image: "./../../styles/images/philovenator.png",
  },
  {
    id: "dino2",
    name: "Les",
    age: 55,
    type: "triceratops",
    diet: "herbivore",
    hp: 100,
    adventures: [],
    image: "./../../styles/images/triceratops.png",
  },
  {
    id: "dino3",
    name: "Nancy",
    age: 5,
    type: "dreadnoughtus",
    diet: "herbivore",
    hp: 100,
    adventures: [],
    image: "./../../styles/images/dreadnoughtus.jpg",
  },
  {
    id: "dino4",
    name: "Horace",
    age: 72,
    type: "velociraptor",
    diet: "carnivore",
    hp: 0,
    adventures: [],
    image: "./../../styles/images/velociraptor.jpg",
  },
  {
    id: "dino5",
    name: "Felicity",
    age: 33,
    type: "tyrannosaurus",
    diet: "carnivore",
    hp: 100,
    adventures: [],
    image: "./../../styles/images/tyrannosaurus.jpg",
  },
  {
    id: "dino6",
    name: "Oswald",
    age: 1,
    type: "compsognathus",
    diet: "carnivore",
    hp: 10,
    adventures: [],
    image: "./../../styles/images/compsognathus.jpg",
  },
  {
    id: "dino7",
    name: "Irving",
    age: 16,
    type: "stegosaurus",
    diet: "herbivore",
    hp: 50,
    adventures: [],
    image: "./../../styles/images/stegosaurus.jpg",
  },
  {
    id: "dino8",
    name: "Odd",
    age: 246,
    type: "pterodactyl",
    diet: "carnivore",
    hp: 0,
    adventures: [],
    image: "./../../styles/images/pterodactyl.jpg",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildKennel = (dinos) => {
  let domString = "";

  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].hp >= 75) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="${dinos[i].image}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${dinos[i].name}</h5>
        <p class="card-subtitle text-muted">${dinos[i].type}</p>
       
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" valuenow="100" valuemin="0" valuemax="100">100</div>
        </div>
        
        <p class="card-text">Age: ${dinos[i].age}</p>
        <p class="card-text">Diet: ${dinos[i].diet}</p>
        <div class="petButton"> 
            <button type="button" class="btn btn-secondary">Pet</button>
        </div> 
        <div class="feedButton">
            <button type="button" class="btn btn-success">Feed</button>
        </div>
        <div class="ventureButton">
            <button type="button" class="btn btn-primary">Venture Forth</button>
        </div>
        <div class="deleteButton">
            <button type="button" class="btn btn-danger">Delete</button>
        </div>

      </div>
    </div>`;
    }
    printToDom("kennel", domString);
  }
};
const buildHospital = (dinos) => {
  let domString = "";

  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].hp < 75 && dinos[i].hp > 0) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="${dinos[i].image}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${dinos[i].name}</h5>
        <p class="card-subtitle text-muted">${dinos[i].type}</p>
       
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 70%;" valuenow="70" valuemin="0" valuemax="100">70</div>
        </div>
        
        <p class="card-text">Age: ${dinos[i].age}</p>
        <p class="card-text">Diet: ${dinos[i].diet}</p>
        <div class="petButton"> 
            <button type="button" class="btn btn-secondary">Pet</button>
        </div> 
        <div class="feedButton">
            <button type="button" class="btn btn-success">Feed</button>
        </div>
        <div class="ventureButton">
            <button type="button" class="btn btn-primary">Venture Forth</button>
        </div>
        <div class="deleteButton">
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>`;
    }
    printToDom("hospital", domString);
  }
};
const buildGraveyard = (dinos) => {
  let domString = "";

  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].hp === 0) {
      domString += `<div class="card" style="width: 18rem;">
      <img src="https://pages.vassar.edu/realarchaeology/files/2013/11/sheep-pile-head-on.jpg" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">${dinos[i].name}</h5>
        <p class="card-subtitle text-muted">${dinos[i].type}</p>
        <p class="card-text">Age: ${dinos[i].age}</p>
        <p class="card-text">Diet: ${dinos[i].diet}</p>
        <div class="deleteButton">
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>`;
    }
    printToDom("graveyard", domString);
  }
};

const clickEvents = () => {
    $(".petButton").click(function(){
        alert("Your dino loves you, too!");
    });
    // $("feedButton").click(function(){
    //     alert("What a tasty treat!");
    // });
}

export { buildKennel, buildHospital, buildGraveyard, clickEvents, dinos };
