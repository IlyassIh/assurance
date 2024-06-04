let bars = document.querySelector("#bars");
let close = document.querySelector("#close")
let side = document.querySelector(".side");


bars.addEventListener("click", () => {
    side.style.display = "flex";
})

close.addEventListener("click", () => {
    side.style.display = "none";
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
        side.style.display = 'none'
    }
})

let links = document.querySelectorAll(".links");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }

        links[i].classList.add("active")
    })
}

addEventListener('load', function () {
    scrollTo(0, 0);
    document.body.classList.add('fade-in');
});


let btn = document.getElementById("btn");

addEventListener("scroll", function () {
    if (scrollY >= 400) {
        btn.classList.add("show-btn");
    } else {
        btn.classList.remove("show-btn");
    }

    if (this.scrollY <= 500) {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }
        links[0].classList.add("active");
    }
    if (this.scrollY > 500) {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }
        links[1].classList.add("active");
    }

    if (this.scrollY >= 1500) {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }
        links[2].classList.add("active");
    }

    if (this.scrollY >= 2000) {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }
        links[3].classList.add("active");
    }
});

btn.addEventListener("click", function () {
    scroll({
        top: 0,
        behavior: "smooth",
    })
});

