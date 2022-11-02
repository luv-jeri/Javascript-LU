class Card {
  constructor(name = 'Box', cost = 0, emogie = '📦') {
    this.name = name;
    this.cost = cost;
    this.emogie = emogie;
    this.element = document.createElement('div');
    this.element.className = 'card';
    this.element.innerHTML = `  
      <div class="card__name">${this.name}</div>
      <div class="card__cost">${this.emogie.repeat(this.cost)}</div>
    `;
  }
  #wrapper = document.querySelector('#wrapper');

  render() {
    this.#wrapper.append(this.element);
  }

  remove() {
    this.element.remove();
  }

  update(name, cost, emogie) {
    this.name = name;
    this.cost = cost;
    this.emogie = emogie;
    this.render();
  }

  changeColor(color) {
    this.element.style.backgroundColor = color;
    this.remove();
    this.render();
  }

  reshape(h, w) {
    this.element.style.height = h;
    this.element.style.width = w;
    this.remove();
    this.render();
  }

  static addAnimation(card) {
    card.element.classList.add('card--animation');
  }
}

const card1 = new Card('Box', 1, '📦');
const card2 = new Card('Box', 1, '📦');

card1.render();
card1.changeColor('green');
card1.reshape('300px', '300px');
card2.render();

const p1 = new Card('Phone', 2, '📱');

p1.render();
p1.changeColor('#8EC3B0');

Card.addAnimation(card1);

console.log(card1);

card1.remove();
