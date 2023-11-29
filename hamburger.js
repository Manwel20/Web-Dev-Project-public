function toggleNav(){
    let pickUp = document.querySelector(".mainNav");
    console.log("click")
    pickUp.classList.toggle('showNav');
}

let hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", toggleNav);