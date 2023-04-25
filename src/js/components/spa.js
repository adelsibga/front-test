document.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        route(e)
    }
    e.preventDefault()
})

const route = (e) => {
    window.history.pushState({}, '', e.target.href)
    handleLocation()
}

const routes = {
    '/': 'index.html',
    '/basket': 'basket.html'
}

const handleLocation = async () => {
    const path = window.location.pathname
    const html = await fetch(routes[path]).then((data) => data.text())
    document.querySelector('main').innerHTML = html
}

window.onpopstate = handleLocation
window.route = route
handleLocation()