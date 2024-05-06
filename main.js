// function toggleMenu() { 
//     const links = document.querySelector('.header_links'); 
 
//     links.classList.toggle('show-on-mobile'); 
// }; 
 
// function callNumber() { 
//     const phoneNumber = '+77787463362'; 
//     alert('Номер для звонка: ' + phoneNumber); 
// }; 
 
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
 
let opened = false; 
 
function toggleBurger(element) { 
  opened = !opened; 
  element.classList.toggle('openedBurger', opened); 
  const headerLinks = document.querySelector('.header_links'); 
  const header_btns = document.querySelector('.header_btns'); 

  headerLinks.style.display = opened ? 'flex' : 'none';
  header_btns.style.display = opened ? 'none' : 'flex';

  headerLinks.style.flexDirection = opened ? 'column' : 'row';  // Показываем или скрываем ссылки при открытии/закрытии бургера 
} 
 
 
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


//  кнопка


function showModal() {
    var modal = document.querySelector('.modal');
    var navCallUp = document.querySelector('.nav_item.nav_call.up');
    modal.style.display = 'flex';
    setTimeout(function() {
        modal.style.opacity = '1'; 
    }, 10); 
    navCallUp.style.display = 'none';
}

function closeModal() {
    var modal = document.querySelector('.modal');
    var navCallUp = document.querySelector('.nav_item.nav_call.up');
    modal.style.opacity = '0'; 
    setTimeout(function() {
        modal.style.display = 'none'; 
    }, 300); 
    navCallUp.style.display = 'block';
}

var navCallUpElement = document.querySelector('.nav_item.nav_call.up');
navCallUpElement.addEventListener('click', showModal);

var closeButton = document.querySelector('.btn_close');
closeButton.addEventListener('click', closeModal);




 
