const cards = document.querySelectorAll('.js-item-card')
const addToCart = document.querySelectorAll('.item__button-buy')
const cartCounter = document.querySelector('.header__cart-items-counter')

cards.forEach((e) => {
    const cardBtn = e.childNodes[1].childNodes[1]
    const title = e.childNodes[0].textContent
    const price = e.childNodes[1].childNodes[0].childNodes[0].textContent
    const currency = e.childNodes[1].childNodes[0].childNodes[1].textContent
    const brand = e.getAttribute('data-brand')
    const imgUrl = e.style.backgroundImage

    cardBtn.addEventListener('click', () => {
        const cartStorage = localStorage.getItem('cart') || '[]'
        const cart = JSON.parse(cartStorage)
        const card = {title, price, currency, brand, imgUrl}

        localStorage.setItem('cart', JSON.stringify([...cart, card]))
    })
})

addToCart.forEach((e) => {
    let count = 1
    e.addEventListener('click', () => {
        cartCounter.style.display = 'block'
        cartCounter.innerHTML = `${count++}`
    })
})
