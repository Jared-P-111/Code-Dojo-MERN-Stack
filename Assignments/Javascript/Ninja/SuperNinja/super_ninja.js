import Ninja from '../ninja.js';

class Sensei extends Ninja {
  constructor(wisdom = 10) {
    super('Sensei', 200, 10, 10);
  }

  speakWisdom = () => {
    super.drinkSake;
    console.log('What one programmer can do in one month, two programmers can do in two months.');
  };
}

const sensei = new Sensei();

sensei.speakWisdom();
sensei.health();
