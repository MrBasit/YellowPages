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
// 2nd Nav
document.addEventListener("scroll",()=>{
    console.log(scrollY)
    if(scrollY>550)
    {
        document.querySelector(".nav-link").classList.add("active");
        console.log("true");
    }
    else 
    {
        document.querySelector(".nav-link").classList.remove("active");
        
    }
})
// 2nd Nav Txt
const allLinks = document.querySelectorAll('.nav-item');

function deacForLink(){
    allLinks.forEach(item => {item.classList.remove('active')})
}
function linkToggler(itm){
    deacForLink();
    var selectLink = document.querySelector(`.${itm}`);
    selectLink.classList.add('active');
}