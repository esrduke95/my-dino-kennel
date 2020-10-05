import { dinos } from '../data/dinoData.js';
import { buildDinoKennel } from './kennel.js';

const addDinoBtn = () => {
    $('#addNewDinoBtn').on('click', (e) => {
        e.preventDefault();
        const name = $('#inputName').val();
        const age = $('#inputAge').val();
        const type = $('#inputSpecies').val();
        const diet = $('#inputDiet').val();
        const image = $('#imgUrl').val();

        dinos.push({
            name: name,
            age: age,
            type: type,
            diet: diet,
            hp: 100,
            adventures: [],
            image: image
        });
        buildDinoKennel(dinos);
        console.log('clickmeeeee');
    });
}

export { addDinoBtn };