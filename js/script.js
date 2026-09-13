// hamburger / close icon / off-canvas nav drawer >>>>>>>>>>>>>>
let menuicon = document.querySelector(".ri-menu-line");
let croseicon = document.querySelector(".ri-close-large-fill");
let navList = document.querySelector("header ul");

function openNav(){
    navList.classList.add("nav-open");
    document.body.classList.add("no-scroll");
}
function closeNav(){
    navList.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
}

menuicon.addEventListener("click", () => {
    if (navList.classList.contains("nav-open")) {
        closeNav();
    } else {
        openNav();
    }
});

croseicon.addEventListener("click", closeNav);

// close when a nav link is tapped
document.querySelectorAll("header ul li").forEach((li) => {
    li.addEventListener("click", closeNav);
});

// close when tapping outside the drawer
document.addEventListener("click", (e) => {
    const clickedInsideNav = navList.contains(e.target);
    const clickedMenuIcon = menuicon.contains(e.target);
    if (navList.classList.contains("nav-open") && !clickedInsideNav && !clickedMenuIcon) {
        closeNav();
    }
});
// ===Close===>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<
