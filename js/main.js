let up = document.querySelector(".goUp");

window.onscroll = function () {
    console.log(this.scrollY);


    
    this.scrollY >= 800 ? up. classList.add ("goUpShow") : up.classList.remove("goUpShow");

};

up.onclick = function () {
    window.scrollTo({
        top : 0,
        behavior : "smooth",
    });
};

