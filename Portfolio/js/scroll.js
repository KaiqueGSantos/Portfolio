class ScrollNavBar{
    constructor(navContainer, upContainer){
        this.navContainer = document.querySelector(navContainer);
        this.upContainer = document.querySelector(upContainer);
        this.scrollClass = "scroll";
        this.lastpos = 0;
        this.currentpos = 0;

        this.scroll = this.scroll.bind(this);
    }

    scroll(){
        this.currentpos = window.scrollY;
        if(this.currentpos < this.lastpos) {
            this.navContainer.classList.add(this.scrollClass);
            this.upContainer.classList.add(this.scrollClass);
            this.navContainer.style.transform = 'translateY(0)';
            this.navContainer.style.opacity = 1;
        }else{
            this.navContainer.classList.remove(this.scrollClass);
            this.upContainer.classList.remove(this.scrollClass);
            this.navContainer.style.transform = 'translateY(-100%)';
            this.navContainer.style.opacity = 0;
        }
        this.lastpos = this.currentpos;
    }

    addScrollEvent(){
        document.addEventListener('scroll', this.scroll);
    }

    init(){
        if(this.navContainer){
            this.addScrollEvent();
        }
        return this;
    }
}

const scrollNavBar= new ScrollNavBar(
    ".nav-container",
    ".up"
);
scrollNavBar.init();
