class DailyCard {
  constructor(day, min, max, unit) {
    this.day = day;
    this.min = min;
    this.max = max;
    this.unit = unit;

    this.warraper = null;

    this.continer = document.createElement('div');
    this.continer.classList.add('card', 'flex', 'fd-column', 'jc-sb', 'ai-c');

    this.title = document.createElement('h6');
    this.title.textContent = this.day;

    this.icon = document.createElement('img');
    this.icon.setAttribute('height', '50');
    this.icon.setAttribute('width', '50');
    this.icon.setAttribute('alt', 'icon');
    this.icon.setAttribute('src', 'assests/sun.png');

    this.temp = document.createElement('div');
    this.tempMax = document.createElement('span');
    this.tempMax.textContent = `${this.max} °${this.unit.toUpperCase()}`;
    this.tempMax.classList.add('temp-max');
    this.tempMin = document.createElement('span');
    this.tempMin.textContent = ` - ${this.min} °${this.unit.toUpperCase()}`;
    this.tempMin.classList.add('temp-min');

    this.temp.append(this.tempMax, this.tempMin);

    this.continer.append(this.title, this.icon, this.temp);
  }

  render(el) {
    this.warraper = el;
    el.append(this.continer);
  }

  remove() {
    this.warraper.removeChild(this.continer);
  }

  switchUnit(unit) {
    this.unit = unit;
    
    if (this.unit === 'c') {
      this.tempMax.textContent = `${Math.round(
        this.max - 273.15
      )} °${this.unit.toUpperCase()}`;
      this.tempMin.textContent = ` - ${Math.round(
        this.min - 273.15
      )} °${this.unit.toUpperCase()}`;
    } else if (this.unit === 'f') {
      this.tempMax.textContent = `${Math.round(
        (this.max - 273.15) * (9 / 5) + 32
      )} °${this.unit.toUpperCase()}`;
      this.tempMin.textContent = ` - ${Math.round(
        (this.min - 273.15) * (9 / 5) + 32
      )} °${this.unit.toUpperCase()}`;
    } else {
      this.tempMax.textContent = `${Math.round(this.max)} °${this.unit.toUpperCase()}`;
      this.tempMin.textContent = ` - ${Math.round(this.min)} °${this.unit.toUpperCase()}`;
    }
  }

  
}

export default DailyCard;
