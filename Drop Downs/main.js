class DropDown {
  constructor(element) {
    this.element = element;
  }

  toggleDrop() {
    this.element.children[1].classList.toggle('hideDrop');
  }

  addEvent() {
    this.element.addEventListener('click', () => this.toggleDrop());
  }
}

function createDropDown(element) {
  const newDropDown = new DropDown(element);
  newDropDown.addEvent();
}

createDropDown(document.querySelector('.versionDrop'));
createDropDown(document.querySelector('.anotherDropDown'));
