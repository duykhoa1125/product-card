const star = document.querySelector(".card__star i")
const cart = document.querySelector(".card__cart i")
const info = document.querySelector(".card__info i")
const card = document.querySelector(".card")

// const img = document.querySelector(".card__img")
const title = document.querySelector(".card__title")
const price = document.querySelector(".card__price")
const size = document.querySelector(".card__size")
const color = document.querySelector(".card__color")
const btn = document.querySelector(".card__action")
const info_text = document.querySelector(".card__info-text")

const add_btn = document.getElementById("add")
const buy_btn = document.getElementById("buy")

star.addEventListener("click", () =>{
    const list = star.classList
    if(list.contains("fa-regular")){
        list.remove("fa-regular")
        list.add("fa-solid")
    } else{
        list.remove("fa-solid")
        list.add("fa-regular")
    }
})
cart.addEventListener("click", () =>{
    alert("Added to cart!")
})
info.addEventListener("click", () =>{
    // img.classList.toggle("hide")
    title.classList.toggle("hide")
    price.classList.toggle("hide")
    size.classList.toggle("hide")
    color.classList.toggle("hide")
    btn.classList.toggle("hide")
    info_text.classList.toggle("hide")
})
add.addEventListener("click", () =>{
    cart.classList.toggle("fa-shake")
    setTimeout(() => {
        cart.classList.toggle("fa-shake")
    }, 900);
})

buy_btn.addEventListener("click", () =>{
    alert("Purchased!")
})