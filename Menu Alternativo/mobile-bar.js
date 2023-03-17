class MobileBar {
    constructor(menuMobile, navList, navLinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation ? (link.style.animation = "") :
        (link.style.animation = `fadeLink 0.5s ease forwards ${index / 7 + 0.3}s`);
      });  
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileBar = new MobileBar (
    ".menuMobile",
    ".navList",
    ".navList li",
);

mobileBar.init();