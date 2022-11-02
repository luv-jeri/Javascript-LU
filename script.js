class Emogie {
  #container = document.querySelector('#show-data');
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }

  render() {
    const div = document.createElement('div');
    div.classList.add('emogie');
    div.innerHTML = `
      <h1>${this.symbol}</h1>
      <h3>${this.name}</h3>
    `;
    this.box = div;
    this.#container.append(div);
  }

  chanegColor(color) {
    this.box.style.backgroundColor = color;
  }

  remove() {
    this.box.remove();
  }
}

const e1 = new Emogie('smile', '😀');
const e2 = new Emogie('Cry', '🥲');
const e3 = new Emogie('Laugh', '😂');

e1.render();
e2.render();
e3.render();

e1.chanegColor('red');
e2.chanegColor('#82CD47');

e3.remove();
e3.render();
