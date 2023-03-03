(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.nav-close');
    const menuLink = document.querySelectorAll('.nav-link');
    const clickOutside = document.querySelector('.main');
        burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
          if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLink.length; i += 1) {
            menuLink[i].addEventListener('click', () => {
                menu.classList.remove('nav-active');
            })
        }};
        clickOutside.addEventListener('click', () => {
                menu.classList.remove('nav-active');
        });
}());


const btns = document.querySelectorAll('.services-btn');

const addButtonClickHandler = () => {
    btns.forEach(btn => btn.addEventListener('click', (e) => {
        let clickButton = e.currentTarget;
        if (clickButton.classList.contains('selected-btn')) {
            clickButton.classList.remove('selected-btn')
            showActiveTabs();
        } else {
            if (document.querySelectorAll('.selected-btn').length <= 1) {
                if (clickButton.classList.contains('selected-btn')) {
                    clickButton.classList.remove('selected-btn');
                }
                clickButton.classList.add('selected-btn');
                showActiveTabs();
            }
        }
    }));
}

addButtonClickHandler();

const showActiveTabs = () => {
    let filteredCards = []
    const cards = document.querySelectorAll('.services-card')
    btns.forEach(btn => {
        if (btn.classList.contains('selected-btn')) {
            filteredCards = [...filteredCards, ...[...cards].filter(card => card.getAttribute('data-category') === btn.getAttribute('data-category'))]
            filteredCards.forEach(card => card.style.filter = 'none')
        } else {
            cards.forEach(card => {
                if (card.getAttribute('data-category') === btn.getAttribute('data-category')) {
                    card.style.filter = 'blur(2px)';
                    card.style.transition = 'all 0.5s linear';
                }
            })
        }
    })

}

(function () {
    const select = document.querySelector('.select');
    const selectHandler = document.querySelector('.select-header');
    const selectCity = document.querySelectorAll('.select-item');
    const selectCardCity = document.querySelector('.city-card');
    
        selectHandler.addEventListener('click', () => {
            selectCardCity.classList.remove('is-active');
        if (select.classList.contains('active')) {
        select.classList.remove('active');
        selectHandler.classList.add('of');
        document.querySelector('.select-current').innerText = 'City';
        } else {
        select.classList.add('active');
        selectHandler.classList.remove('of');
        }
        if (window.innerWidth <= 767) {
            document.querySelector('.contact-woman').style.visibility = 'visible';
            select.style.marginTop = "0";
        }
        selectCity.forEach((item) => {
         item.addEventListener('click', (e) => {
            document.querySelector('.select-current').innerText = e.target.innerText;
           select.classList.remove('active');
         })
        })
    
        selectCity.forEach((item) => {
            item.addEventListener('click', (e) => {
                selectCardCity.classList.add('is-active');
                if (e.target.innerText === 'Yonkers, NY') {
                    document.querySelector('.city-value').innerText = 'Yonkers, NY';
                    document.querySelector('.phone-value').innerText = '+1	914	678 0003';
                    document.querySelector('.adress-value').innerText = '511 Warburton Ave';
                } else if (e.target.innerText === 'New York City') {
                    document.querySelector('.city-value').innerText = 'New York City';
                    document.querySelector('.phone-value').innerText = '+1	212	456 0002';
                    document.querySelector('.adress-value').innerText = '9 East 91st Street';
                } else if (e.target.innerText === 'Sherrill, NY') {
                    document.querySelector('.city-value').innerText = 'Sherrill, NY';
                    document.querySelector('.phone-value').innerText = '+1	315	908 0004';
                    document.querySelector('.adress-value').innerText = '14 WEST Noyes BLVD';
                } else if (e.target.innerText === 'Canandaigua, NY') {
                    document.querySelector('.city-value').innerText = 'Canandaigua, NY';
                    document.querySelector('.phone-value').innerText = '+1	585	393 0001';
                    document.querySelector('.adress-value').innerText = '151 Charlotte Street   ';
                }
                if (window.innerWidth <= 767) {
                    document.querySelector('.contact-woman').style.visibility = 'hidden';
                    select.style.marginTop = "-30px";
                    selectCardCity.style.marginTop = "20px";
                }
                
            })
        })


    })
    }());



const accordionBtns = document.querySelectorAll('.accordion-header').forEach((abtn) => {
    abtn.addEventListener('click', (e) => {
        let content = abtn.nextElementSibling;
        console.log(e)
            if (content.style.maxHeight) {
               document.querySelectorAll('.accordion-content').forEach((el) => el.style.maxHeight = null);
               document.querySelectorAll('.accordion-header').forEach((abtn) => abtn.classList.add('is-of'));
            } else {
                    document.querySelectorAll('.accordion-content').forEach((el) => el.style.maxHeight = null)
                    content.style.maxHeight = content.scrollHeight + 'px';
                    document.querySelectorAll('.accordion-header').forEach((abtn) => abtn.classList.add('is-of'));
                    e.target.classList.remove('is-of')
                }

            })
})
