// Browse Menu
const item = document.querySelector('.browse');
const menuMain = document.querySelector('.sub_menu_main');

item.addEventListener('click', () => {
    menuMain.classList.toggle('active');

});

// Input Feild
const inputDiv = document.querySelectorAll('.header__list__2__main__border');

function deacDiv() {
    inputDiv.forEach(item => { item.classList.remove('active') })
}
function toggleBorder(itm) {
    deacDiv();
    var fld = document.querySelector(`.${itm}`);
    fld.classList.add('active');
}


try {
    // 2nd Nav
    document.addEventListener("scroll", () => {
        console.log(scrollY)
        if (scrollY > 520) {
            document.querySelector(".nav-link").classList.add("active");
            console.log("true");
        }
        else {
            document.querySelector(".nav-link").classList.remove("active");

        }
    })
    // 2nd Nav Txt
    const allLinks = document.querySelectorAll('.nav-item');

    function deacForLink() {
        allLinks.forEach(item => { item.classList.remove('active') })
    }
    function linkToggler(itm) {
        deacForLink();
        var selectLink = document.querySelector(`.${itm}`);
        selectLink.classList.add('active');
    }
} catch (err) {
    console.log(err);
}
try {
    // 2nd Nav
    // Defoult list
    const defaultTrigger = document.querySelector('.sortoutlist1__toggler');
    const defaultSubMenu = document.querySelector('.sub_main_ul_default');

    defaultTrigger.addEventListener('click', () => {
        defaultSubMenu.classList.toggle('active');
    });
} catch (err) {
    console.log(err);
}

try {
    // Detail Page Header
    document.addEventListener("scroll", () => {
        console.log(scrollY)
        if (scrollY > 520) {
            document.querySelector(".sticky").classList.add("sticky__scroll__top");
            console.log('ture');

        }
        else {
            document.querySelector(".sticky").classList.remove("sticky__scroll__top");

        }
    })

} catch (err) {
    console.log(err);
}
try {
    var listItem = document.querySelectorAll('.header__top__item');

    listItem.forEach(item => { item.addEventListener('click', changeMenu) });

    function deacMenu() {
        listItem.forEach(item => { item.classList.remove('active') })
    }

    function changeMenu(e) {
        
        if (e.target.parentElement.classList.contains('active')) {
            deacMenu();

        }else{
            deacMenu();
            this.classList.add('active');
        }
        
    }

} catch (err) {
    console.log(err);
}
// Asidebar Inside Nav
try {
    var listItemLinks = document.querySelectorAll('.aside__header__ul__li__item');

    listItemLinks.forEach(item => { item.addEventListener('click', changeMenuForAsideBar) });

    function deacMenuForAsideBar() {
        listItemLinks.forEach(item => { item.classList.remove('active') })
    }

    function changeMenuForAsideBar(e) {
        if (e.target.parentElement.classList.contains('active')) {
            deacMenuForAsideBar();

        }else {
            deacMenuForAsideBar();
            this.classList.add('active');
            console.log('salse');
        }
    }

} catch (err) {
    console.log(err);
}
// Asidebar Menu
try {
    const asideBarTrigger = document.querySelector('.hamburger');
    const asideBarContentbody = document.querySelector('body');
    const asideBarOverlay = document.querySelector('.header__aside__overlay');
    const asideBar = document.querySelector('.aside__header');
    const mainContent = document.querySelector('.main__content__for__mobile');

    // asideBarTrigger.addEventListener('click', asideBarFunc);
    // asideBarOverlay.addEventListener('click', asideBarFunc);

    function asideBarFunc() {
        asideBar.classList.toggle('active');
        mainContent.classList.toggle('active');
        asideBarContentbody.classList.toggle('active');
    }

} catch (err) {
    console.log(err);
}
