class Sidebar {
  constructor(element) {
    this.element = element;
  }

  toggleBar() {
    this.element.classList.toggle('show');
  }
  addEvents(button) {
    button.addEventListener('click', () => {
      this.toggleBar();
    });
  }
}

function createSideBar(sidebar, button) {
  const newSideBar = new Sidebar(sidebar);
  newSideBar.addEvents(button);
}

createSideBar(
  document.querySelector('.sidebar'),
  document.querySelector('.sidebarButton')
);
