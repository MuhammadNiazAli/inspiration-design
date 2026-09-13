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

// scroll-reveal micro-animations (fade + rise into view), staggered per card row
(function () {
    const revealTargets = document.querySelectorAll([
        '.mainh1-heading', '.ourway-h1_heading', '.ourprinter-h1_heading', '.team-h1_heading',
        '.improve-h1_heading', '.testimonial-h1_heading', '.about-h1_heading', '.contact-h1_heading', '.form-heading_h1',
        '.main_container-box1', '.main_container-box2', '.main_container-box3', '.main_container-box4',
        '.container2-ourway_box1', '.container2-ourway_box2', '.container2-ourway_box3', '.container2-ourway_box4',
        '.team-container1_box1', '.team-container1_box2', '.team-container2_box3', '.team-container2_box4',
        '.testimonial-bo1', '.testimonial-bo2', '.testimonial-bo3', '.testimonial-bo4', '.testimonial-bo5', '.testimonial-bo6',
        '.bottombox1', '.bottombox2', '.bottombox3', '.FORM'
    ].join(','));

    if (!('IntersectionObserver' in window)) {
        revealTargets.forEach((el) => el.classList.add('reveal', 'is-visible'));
        return;
    }

    const staggerCount = new Map();
    revealTargets.forEach((el) => {
        el.classList.add('reveal');
        const parent = el.parentElement;
        const idx = staggerCount.get(parent) || 0;
        staggerCount.set(parent, idx + 1);
        el.style.transitionDelay = Math.min(idx * 90, 360) + 'ms';
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
})();
