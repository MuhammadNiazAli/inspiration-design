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

// GSAP-powered hero entrance + subtle scroll parallax (premium polish) >>>>>>>>
// Previously gsap/ScrollTrigger were loaded but never used — the hero text
// popped in instantly while only the hero image had an entrance animation.
// This ties the whole hero together with one coordinated sequence and adds
// a light depth-parallax on the large section images. Fully respects
// prefers-reduced-motion and fails safe if GSAP doesn't load.
(function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Hero entrance: tag -> heading -> paragraph -> button -> feature cards,
    // staggered with an easing curve that feels premium rather than mechanical.
    gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .from('.mainh4-Top', { opacity: 0, y: -18 })
        .from('.mainh1-heading', { opacity: 0, y: 30 }, '-=0.55')
        .from('.main-paragraph_withlink', { opacity: 0, y: 18 }, '-=0.55')
        .from('.main-btn', { opacity: 0, y: 18 }, '-=0.55')
        .from(
            ['.main_container-box1', '.main_container-box2', '.main_container-box3', '.main_container-box4'],
            { opacity: 0, y: 28, stagger: 0.12 },
            '-=0.5'
        );

    // Gentle depth-parallax on the larger section illustrations while scrolling.
    // (Hero image is skipped here since it already has its own CSS entrance animation.)
    if (typeof ScrollTrigger !== 'undefined') {
        ['.ourprinter-pic', '.improve-pic', '.about-pic', '.contact-pic'].forEach((selector) => {
            const el = document.querySelector(selector);
            if (!el) return;
            gsap.to(el, {
                y: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });
    }
})();
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
