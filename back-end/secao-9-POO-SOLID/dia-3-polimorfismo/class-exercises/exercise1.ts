abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('hello');
  }
  specialMove(): void {
    console.log('special melee attack');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('i am back');
  }
  specialMove(): void {
    console.log('special long range attack');
  }
}

function actions(character: Character) {
  character.talk();
  character.specialMove();
}

const melee = new MeleeCharacter();
const longRange = new LongRangeCharacter();

actions(melee);
actions(longRange);

export {}
