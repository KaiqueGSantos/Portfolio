class ScrollAnimation{
    constructor(){
        this.boxes = document.querySelectorAll('.box');

        this.checkBoxes = this.checkBoxes.bind(this);
    }

    checkBoxes(){
        console.log("sa")
        const triggerBottom = window.innerHeight / 5 * 4.2;
        this.boxes.forEach(box =>{
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom){
                box.classList.add("show");
            }
            /*else{
                box.classList.remove("show");
            }*/
        });
    }

    addScrollEvent(){
        document.addEventListener('scroll', this.checkBoxes);
    }

    init(){
        if(this.boxes){
            this.addScrollEvent();
            console.log("aa")
        }
        return this;
    }
}

const scrollAnimation = new ScrollAnimation(
    '.box'
);
scrollAnimation.init();