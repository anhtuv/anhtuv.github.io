document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    
    })  
}, false);


function TxtType(element) {
    this.element = element;
    this.txt = '';
    this.tick();
    // this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var fullTxt = "Welcome! Bienvenue!";

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } 
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = '<span>'+this.txt+'</span>';

    var that = this;

    // if (!this.isDeleting && this.txt === fullTxt) {
    //     this.isDeleting = true;
    //     //this.element.style.borderRight = 0;
    // } 
    // else if (this.isDeleting && this.txt === '') {
    //     this.isDeleting = false;

    // }

    setTimeout(function() {that.tick();}, 300);

};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    new TxtType(elements[0]);
    console.log(elements[0]);
};