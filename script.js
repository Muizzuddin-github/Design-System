function main(){

    const menu = document.querySelector(".navbar_menu")
    const navbarToggle = document.querySelector(".navbar_toggle")

    navbarToggle.addEventListener("click",(e) => {
        const items = navbarToggle.querySelectorAll("section")

        items[0].classList.toggle("navbar_toggle_item-full")
        items[items.length - 1].classList.toggle("navbar_toggle_item-full")
        menu.classList.toggle("navbar_menu-hidden")
        
    })

}


main()