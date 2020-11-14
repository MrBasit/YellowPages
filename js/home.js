try {
    // Home Page Header
    document.addEventListener("scroll", () => {
        console.log(scrollY)
        if (scrollY > 282) {
            document.querySelector("header").classList.add("sticky");
            document.querySelector(".header__list__2__main").classList.remove("d-none__for__home__sec");
            document.querySelector(".use__our__mobile").classList.remove("d-none__for__home__sec");

        }
        else {
            document.querySelector("header").classList.remove("sticky");
            document.querySelector(".header__list__2__main").classList.add("d-none__for__home__sec");
            document.querySelector(".use__our__mobile").classList.add("d-none__for__home__sec");
        }
    })

} catch (err) {
    console.log(err);
}