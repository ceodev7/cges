const menuburger = document.querySelector('.menu-burger')
const navbar = document.querySelector('.navbar')
const navitem = document.querySelectorAll('.navbar ul li')

menuburger.addEventListener('click', () => {
    navbar.classList.toggle('show')
    menuburger.classList.toggle('active')
})

navitem.forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove('show')
        menuburger.classList.remove('active')
    })
})