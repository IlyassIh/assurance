let bars = document.querySelector("#bars");
let close = document.querySelector("#close")
let side = document.querySelector(".side");


bars.addEventListener("click", ()=> {
    side.style.display = "flex";
})

close.addEventListener("click", ()=> {
    side.style.display = "none";
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 1023) {
        side.style.display = 'none'
    } 
})

let links = document.querySelectorAll(".links");

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        for(let j = 0; j < links.length; j++){
            links[j].classList.remove("active");
        }

        links[i].classList.add("active")    
    })
}