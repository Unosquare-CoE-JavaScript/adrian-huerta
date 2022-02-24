'use strict';

function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
  symbols: [
    "X", "Y", "Z", "W", "$", "*", "<", "@"
  ],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax( this.symbols.length - 1);
    }

    return this.symbols[this.position];
  }
};

var slotMachine = {
  reels: [
    // this slot machine needs 3 separate reels
    // hint: Object.create(..)
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel){
      reel.spin();
    });
  },
  display() {
    let lines = [];

    for (let i = -1; i <= 1; i++) {
      let line = this.reels.map(function getSlot(reel) {
        let slot = Object.create(reel);
        slot.position = (reel.symbols.length + reel.position + i) % reel.symbols.length;
        return reel.display.call(slot);
      });
      lines.push(line.join(' | '));
    }

    return lines.join('\n');
  }
}

console.log(slotMachine.spin());
console.log(slotMachine.display());

console.log(slotMachine.spin());
console.log(slotMachine.display());
