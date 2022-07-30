class Carousel {
  constructor(element) {
    this.element = element;
    this.images = element.children[0].children;
    this.length = this.images.length;
    this.player = element.children[1].children;
    this.currentSlide = 0;
  }

  updateText() {
    this.player[1].textContent = `${this.currentSlide + 1}/${this.length}`;
  }
  nextSlide() {
    if (this.currentSlide == this.length - 1) return;
    this.toggleSlide();
    if (this.currentSlide < this.length - 1) {
      this.currentSlide++;
      this.toggleSlide();
    }
  }

  prevSlide() {
    if (this.currentSlide == 0) return;
    this.toggleSlide();
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.toggleSlide();
    }
  }

  toggleSlide() {
    this.updateText();
    console.log(this.currentSlide);
    this.images[this.currentSlide].classList.toggle('show');
  }

  addEvent() {
    this.toggleSlide();
    this.player[0].addEventListener('click', () => {
      this.prevSlide();
    });
    this.player[2].addEventListener('click', () => {
      this.nextSlide();
    });
  }

  goBack = false;

  slideShow() {
    console.log(this.goBack);
    setTimeout(() => {
      if (!this.goBack) {
        if (this.currentSlide < this.length - 1) {
          this.nextSlide();
        }
        if (this.currentSlide == this.length - 1) {
          this.goBack = true;
        }
      } else if (this.goBack) {
        console.log(`${this.currentSlide} < ${this.length - 1}`);
        if (this.currentSlide <= this.length - 1) {
          this.prevSlide();
        }
        if (this.currentSlide == 0) {
          this.goBack = false;
        }
      }

      this.slideShow();
    }, 1000);
  }
}

function createCarousel(element) {
  carousel = new Carousel(element);
  carousel.addEvent();
  carousel.slideShow();
}

createCarousel(document.querySelector('.carousel'));
