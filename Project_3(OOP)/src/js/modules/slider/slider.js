export default class Slider {
    constructor({container = null, buttons = null, next = null, prev = null, activeClass = '', animate, autoplay} = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.buttons = document.querySelectorAll(buttons);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }
}


