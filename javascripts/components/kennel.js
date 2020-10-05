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
              <p>${dinos.age}</p>
              <p><i>${dinos.type}</i></p>
              <p><i>${dinos.hp}</i></p>
            </div>
          </div>`);
    } else if (dinos.hp < 75 && dinos.hp > 0) {
      $("#hospital").append(`<div class="card" style="width: 18rem;">
        <img src="${dinos.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4>${dinos.name}</h4>
          <p>${dinos.age}</p>
          <p><i>${dinos.type}</i></p>
          <p><i>${dinos.hp}</i></p>
        </div>
      </div>`);
    } else if (dinos.hp === 0) {
      $("#graveyard").append(`<div class="card" style="width: 18rem;">
    <img src="${dinos.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4>${dinos.name}</h4>
      <p>${dinos.age}</p>
      <p><i>${dinos.type}</i></p>
      <p><i>${dinos.hp}</i></p>
    </div>
  </div>`);
    }
  });
};

export { buildDinoKennel };
