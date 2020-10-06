import dinos from '../data/dinoData.js';
import buildDinoKennel from '../components/buildDinos.js';

const deleteDino = () => {
  $('#dinoKennel').on('click', '.deleteBtn', (e) => {
    const target = e.target.id;
    console.log(target);
  });
};

export default { deleteMessage };

