import products from '../assets/products.json' assert {type: 'json'}

const createItemCard = () => {
    const amount = products.length
    const cardsWrapper = document.querySelector('.catalog__items-list')

    for (let i = 1; i <= amount; i++) {
        const card = document.createElement('div')
        card.className = 'js-item-card catalog__item'

        const cardTitle = document.createElement('h3')
        cardTitle.className = 'js-title title_h3 catalog__item-title'

        const cardContent = document.createElement('div')
        cardContent.className = 'item__bottom'

        const itemPrice = document.createElement('div')
        itemPrice.className = 'item__price'

        const priceValue = document.createElement('span')
        priceValue.className = 'js-value item__price-value text'

        const priceCurrency = document.createElement('span')
        priceCurrency.className = 'js-currency item__price-currency text'

        const cartLink = document.createElement('a')
        cartLink.id = `${products[i - 1].id}`
        cartLink.className = 'item__button-buy text'
        cartLink.href = 'javascript:void(0);'
        cartLink.textContent = 'В корзину'

        cardsWrapper.appendChild(card)
        card.appendChild(cardTitle)
        card.appendChild(cardContent)
        cardContent.appendChild(itemPrice)
        itemPrice.appendChild(priceValue)
        itemPrice.appendChild(priceCurrency)
        cardContent.appendChild(cartLink)
    }
}

const setItemContent = () => {
    const card = document.querySelectorAll('.js-item-card')
    const title = document.querySelectorAll('.js-title')
    const value = document.querySelectorAll('.js-value')
    const currency = document.querySelectorAll('.js-currency')

    for (let i = 0; i <= products.length; i++) {
        let url = products[i].image
        let brand = products[i].brand

        card[i].dataset.brand = `${brand}`
        card[i].style['background-image'] = `url('${url}')`
        title[i].innerHTML += products[i].title
        value[i].innerHTML += products[i].regular_price.value
        currency[i].innerHTML += products[i].regular_price.currency
    }
}

createItemCard()
setItemContent()
