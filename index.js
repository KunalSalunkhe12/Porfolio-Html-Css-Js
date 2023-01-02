let hamburger = document.querySelector('.hamburger')
let navLinks = document.querySelector('.nav-links')
let header = document.querySelector('header')
let links = document.querySelectorAll('.links');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active-ul')
    header.classList.toggle('header-pad')
    document.querySelector('.fa-solid').classList.toggle('fa-x')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.toggle('header-pad')
        navLinks.classList.toggle('active-ul')
        document.querySelector('.fa-solid').classList.toggle('fa-x')
    })
})



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenX = document.querySelectorAll('.x-hidden');
hiddenX.forEach(el => {
    observer.observe(el);
})


const hiddenY = document.querySelectorAll('.y-hidden');
hiddenY.forEach(el => {
    observer.observe(el);
})
