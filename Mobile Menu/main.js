class Sidebar {
  constructor(element) {
    this.element = element.children[0];
    this.background = element;
  }

  toggleBar() {
    this.background.style.display = 'flex';
    setTimeout(() => {
      this.element.style.width = '400px';
    }, 0);
  }

  disableBar() {
    this.element.style.width = '0px';
    setTimeout(() => {
      this.background.style.display = 'none';
    }, 301);
  }
  addEvents(button) {
    button.addEventListener('click', () => {
      this.toggleBar();
    });
    this.background.addEventListener('click', () => {
      this.disableBar();
    });
    Array.from(this.element.children).forEach((element) => {
      if (element.classList.contains('sidebarItem')) {
        element.addEventListener('click', () => {
          this.disableBar();
        });
      }
    });
  }
}

function createSideBar(sidebar, button) {
  const newSideBar = new Sidebar(sidebar);
  newSideBar.addEvents(button);
}

createSideBar(
  document.querySelector('.sidebarBG'),
  document.querySelector('.sidebarButton')
);
