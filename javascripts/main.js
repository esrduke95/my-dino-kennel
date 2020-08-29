import {  buildKennel, buildHospital, buildGraveyard, clickEvents, dinos } from './components/kennel.js';

const init = () => {
    buildKennel(dinos);
    buildHospital(dinos);
    buildGraveyard(dinos);
    clickEvents();
};

init();