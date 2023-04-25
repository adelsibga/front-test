import products from '../assets/products.json' assert {type: 'json'}

const amountOfCards = products.length
const cardsPerPage = 6
const amountOfPages = Math.ceil(amountOfCards / cardsPerPage)

const pagination = document.querySelector('.pagination')
let page = ''

for (let i = 0; i < amountOfPages; i++) {
    page += '<span data-page=' + i * cardsPerPage + '  id="page-' + (i + 1) + '">' + (i + 1) + '</span>'
}
pagination.innerHTML = page

const card = document.querySelectorAll('.catalog__item')
for (let i = 0; i < card.length; i++) {
    if (i < cardsPerPage) {
        card[i].style.display = 'flex'
    }
}

let activePage = document.getElementById('page-1')
activePage.classList.add('pagination_active')

function paginationList(event) {
    if (event.target.tagName.toLowerCase() !== 'span') {
        return
    }

    const dataPage = +event.target.dataset.page
    activePage.classList.remove('pagination_active')
    activePage = document.getElementById(event.target.id)
    activePage.classList.add('pagination_active')

    for (let i = 0; i < card.length; i++) {
        card[i].dataset.num = `${i}`
        const dataNum = card[i].dataset.num
        if (dataNum <= dataPage || dataNum >= dataPage) {
            card[i].style.display = 'none'
        }
    }

    let j = 0
    for (let i = dataPage; i < card.length; i++) {
        if (j >= cardsPerPage) {
            break
        }
        card[i].style.display = 'flex'
        j++
    }
}

pagination.addEventListener('click', (event) => {
    paginationList(event)
})