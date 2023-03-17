class Mobile {
    constructor(burgerMenu, navList, navLinks) {
        this.burgerMenu = document.querySelector(burgerMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }


    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`);
        });
    }

    
    
    handleClick () {
        this.navList.classList.toggle(this.activeClass);
        this.burgerMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.burgerMenu.addEventListener("click", this.handleClick);    
    }

    init() {
        if (this.burgerMenu) {
            this.addClickEvent();
        }
        return this;

    }
    

}

const mobile = new Mobile(
    ".burgerMenu",
    ".navList",
    ".navList li",
);

mobile.init();