const hero = {
    heroName: "Batman",
    dialogue() {
      console.log(`I am ${this.heroName}`);
    }
  };

hero.dialogue();
const dlg = hero.dialogue.bind(hero);
dlg();

const dlg2 = hero.dialogue;
dlg2.call(hero);
dlg2.apply(hero);
// setTimeOut(hero.dialogue.bind(hero), 1000);

setTimeout(hero.dialogue.bind(hero), 1000);
