function toggleMenu() {
    const links = document.querySelector('.header_links');

    links.classList.toggle('show-on-mobile');
};

function callNumber() {
    const phoneNumber = '+77787463362';
    alert('Номер для звонка: ' + phoneNumber);
};

function openWhatsApp() {
    const phoneNumber = '+77788968934';
    const url = 'https://wa.me/' + phoneNumber;
    window.open(url, '_blank');
};

function openInstagram() {
    const username = 'kazcg.kz';
    const url = 'https://www.instagram.com/' + username;
    window.open(url, '_blank');
};

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Скроллим вниз
        document.querySelector('header').classList.add("header_hidden");
    } else {
        // Скроллим вверх
        document.querySelector('header').classList.remove("header_hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substr(1);

        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
