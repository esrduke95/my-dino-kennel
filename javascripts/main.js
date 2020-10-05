import { addDinoBtn } from './components/buildDinos.js';
import { buildDinoKennel } from './components/kennel.js';
import { dinos } from './data/dinoData.js';

const init = () => {
    addDinoBtn();
    buildDinoKennel(dinos);
};

init();