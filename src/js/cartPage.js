const cartContainer = document.querySelector('.cart')
const cartStorage = localStorage.getItem('cart') || '[]'

if (cartStorage.length) {
    const cartItems = JSON.parse(cartStorage)

    for (let key in cartItems) {
        const newCard = document.createElement('div')
        newCard.className = 'js-item-card catalog__item'
        newCard.style.display = 'flex'
        newCard.dataset.brand = `${cartItems[key].brand}`
        newCard.style['background-image'] = `${cartItems[key].imgUrl}`

        newCard.innerHTML = `
            <h3 class="js-title title_h3 catalog__item-title">${cartItems[key].title}</h3>
            <div class="item__bottom">
                <div class="item__price">
                    <span class="js-value item__price-value text">${cartItems[key].price}</span>
                    <span class="js-currency item__price-currency text">${cartItems[key].currency}</span>
                </div>
            </div>
        `

        cartContainer.appendChild(newCard)
    }
}