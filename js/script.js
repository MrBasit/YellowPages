// Browse Menu
const item = document.querySelector('.browse');
const menuMain = document.querySelector('.sub_menu_main');

item.addEventListener('click',()=>{
    menuMain.classList.toggle('active');
    
});

// Input Feild
const inputDiv = document.querySelectorAll('.header__list__2__main__border');

function deacDiv(){
    inputDiv.forEach(item => {item.classList.remove('active')})
}
function toggleBorder(itm){
    deacDiv();
    var fld = document.querySelector(`.${itm}`);
    fld.classList.add('active');
}

// Defoult list
const defaultTrigger = document.querySelector('.sortoutlist1__toggler');
const defaultSubMenu = document.querySelector('.sub_main_ul_default');

defaultTrigger.addEventListener('click',()=>{
    defaultSubMenu.classList.toggle('active');
});

// // 2nd Nav
// document.addEventListener("scroll",()=>{
//     console.log(scrollY)
//     if(scrollY>500)
//     {
//         document.querySelector(".nav-link").classList.add("active");
//         console.log("true");
//     }
//     else 
//     {
//         document.querySelector(".nav-link").classList.remove("active");
        
//     }
// })