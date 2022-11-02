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

  animate() {
    this.box.classList.add('animate');
    setTimeout(() => {
      this.box.classList.remove('animate');
    }, 1000);
  }

  increaseSize(times) {
    this.box.style.transform = `scale(${times})`;
  }
}

const e1 = new Emogie('smile', '😀');
const e2 = new Emogie('Cry', '🥲');
const e3 = new Emogie('Laugh', '😂');
const e4 = new Emogie('Angry', '😡');

e1.render();
e2.render();
e3.render();
e4.render();
e4.chanegColor('red');

e1.increaseSize(1.1)

e1.chanegColor('red');
e2.chanegColor('#82CD47');

e3.remove();
e3.render();

e4.animate();
e1.animate();
