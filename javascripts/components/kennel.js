import { dinos } from "../data/dinoData.js";

const buildDinoKennel = (array) => {
  $("#healthyDinos").html(``);
  $("#hospital").html(``);
  $("#graveyard").html(``);
  array.forEach((dinos) => {
    if (dinos.hp > 75) {
      $("#healthyDinos").append(`<div class="card" style="width: 18rem;">
            <img src="${dinos.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4>${dinos.name}</h4>
              <h5>${dinos.age}</h5>
              <h5><i>${dinos.type}</i></p>
              <h5><i>${dinos.hp}</i></p>
              <div class="dinoButtons">
                <button type="button" class="btn btn-primary petBtn">Pet</button>
                <button type="button" class="btn btn-warning ventureBtn">Venture!</button>
                <button type="button" class="btn btn-success feedBtn"  data-toggle="modal" data-target="#exampleModal">Feed</button>
                <button type="button" class="btn btn-danger deleteBtn">Delete</button>
              </div>
            </div>
          </div>`);
    } else if (dinos.hp < 75 && dinos.hp > 0) {
      $("#hospital").append(`<div class="card" style="width: 18rem;">
        <img src="${dinos.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4>${dinos.name}</h4>
          <h5>${dinos.age}</p>
          <h5><i>${dinos.type}</i></p>
          <h5><i>${dinos.hp}</i></p>
          <div class="dinoButtons">
            <button type="button" class="btn btn-primary petBtn">Pet</button>
            <button type="button" class="btn btn-warning ventureBtn">Venture!</button>
            <button type="button" class="btn btn-success feedBtn" id="feedBtn">Feed</button>
            <button type="button" class="btn btn-danger deleteBtn">Delete</button>
          </div>
        </div>
      </div>`);
    } else if (dinos.hp === 0) {
      $("#graveyard").append(`<div class="card" style="width: 18rem;">
    <img src="${dinos.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4>${dinos.name}</h4>
      <h5>${dinos.age}</p>
      <h5><i>${dinos.type}</i></p>
      <h5><i>${dinos.hp}</i></p>
      <button type="button" class="btn btn-danger deleteBtn">Delete</button>
    </div>
  </div>`);
    }
  });
};


const feedDino = () => {
  $(".feedBtn").on("click", () => {
    console.log("feed");
  });
};

const petDino = () => {
  $(".petBtn").on("click", (e) => {
    console.log("pet dinoooo");
  });
};

export { buildDinoKennel, petDino, feedDino };
