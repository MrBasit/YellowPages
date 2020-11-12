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
    var contentList = document.querySelectorAll('.link__sub__menu');

    listItem.forEach(item => { item.addEventListener('click', changeMenu) });

    function deacMenu() {
        listItem.forEach(item => { item.classList.remove('active') })
    }

    let open = 'open';

    function changeMenu(e) {
        
        if (open === 'open') {
            deacMenu();
            this.classList.add('active');
            open = 'close';

        }else{
            deacMenu();
            open = 'open';
        }
        
    }

} catch (err) {
    console.log(err);
}
