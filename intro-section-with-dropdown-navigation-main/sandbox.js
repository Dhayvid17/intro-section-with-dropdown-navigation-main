const buttonOne = document.querySelector(".features");
const buttonTwo = document.querySelector(".company");

const hidden = document.querySelectorAll(".flex-ul ul");

const arrowOne = document.querySelector(".arrow-i");
const arrowTwo = document.querySelector(".arrow-ii");

buttonOne.addEventListener("click", function () {
    if (hidden[0].style.display === 'none') {
        hidden[0].style.display = 'block';
        arrowOne.style.transform = "rotate(180deg)";
    } else {
        hidden[0].style.display = 'none'
        arrowOne.style.transform = "rotate(0deg)";
    }
});

buttonTwo.addEventListener("click", function () {
    if (hidden[1].style.display === 'none') {
        hidden[1].style.display = 'block';
        arrowTwo.style.transform = "rotate(180deg)";
    } else {
        hidden[1].style.display = 'none'
        arrowTwo.style.transform = "rotate(0deg)";
    }
});



const menus = document.querySelectorAll(".icon-menu, .icon-close");

menus.forEach(menu => {
    menu.addEventListener('click', function (e) {
        let nav = document.querySelector(".nav-container");
        let bgd = document.querySelector('.opacity');

        if (nav.style.display === 'none') {
            nav.style.display = 'block';
            bgd.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            bgd.style.height = "100vh";
        } else {
            nav.style.display = 'none';
            bgd.style.backgroundColor = "inherit";
        }
    });
});

