const cards = document.querySelectorAll('.catalog__item')
const filterProperties = document.querySelector('nav')
const pagination = document.querySelector('.pagination')

filterProperties.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'li') {
        return false
    }

    let filter = e.target.dataset['f']
    let k = 0

    cards.forEach((e) => {
        e.classList.remove('hidden')
        e.style.display = 'flex'

        if (e.dataset.brand === filter) {
            e.classList.remove('hidden')
            e.style.display = 'flex'
        }
        else {
            e.classList.add('hidden')
        }

        if (!e.classList.contains('hidden')) {
            k++
        }

        if (k < 6 && filter !== 'all') {
            pagination.classList.add('hidden')
        }
        else {
            pagination.classList.remove('hidden')
        }

        if (filter === 'all' && e.classList.contains('hidden')) {
            e.classList.remove('hidden')
        }
    })
})