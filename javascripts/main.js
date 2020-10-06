import { addDinoBtn } from './components/buildDinos.js';
import { buildDinoKennel, petDino, feedDino} from './components/kennel.js';
import { dinos } from './data/dinoData.js';

const init = () => {
    addDinoBtn();
    buildDinoKennel(dinos);
    // deleteDino();
    petDino();
    feedDino();
};

init();