import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home({children}) {
    useEffect(() => {
        "use strict";

        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all);
            if (selectEl) {
                if (all) {
                    selectEl.forEach((e) => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        /**
         * Easy on scroll event listener
         */
        const onscroll = (el, listener) => {
            el.addEventListener("scroll", listener);
        };

        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach((navbarlink) => {
                if (!navbarlink.hash) return;
                    let section = select(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                    navbarlink.classList.add("active");
                } else {
                    navbarlink.classList.remove("active");
                }
            });
        };
        window.addEventListener("load", navbarlinksActive);
        onscroll(document, navbarlinksActive);

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            let header = select("#header");
            let offset = header.offsetHeight;

            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: "smooth",
            });
        };

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select("#header");
        let selectTopbar = select("#topbar");
        if (selectHeader) {
            const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add("header-scrolled");
                if (selectTopbar) {
                    selectTopbar.classList.add("topbar-scrolled");
                }
            } else {
                selectHeader.classList.remove("header-scrolled");
                if (selectTopbar) {
                    selectTopbar.classList.remove("topbar-scrolled");
                }
            }
            };
            window.addEventListener("load", headerScrolled);
            onscroll(document, headerScrolled);
        }

        /**
         * Back to top button
         */
        let backtotop = select(".back-to-top");
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add("active");
                } else {
                    backtotop.classList.remove("active");
                }
            };
            window.addEventListener("load", toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }

        /**
         * Mobile nav toggle
         */
        on("click", ".mobile-nav-toggle", function (e) {
            select("#navbar").classList.toggle("navbar-mobile");
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
        });

        /**
         * Mobile nav dropdowns activate
         */
        on("click", ".navbar .dropdown > a", function (e) {
            if (select("#navbar").classList.contains("navbar-mobile")) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle("dropdown-active");
            }
        }, true);

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on("click", ".scrollto", function (e) {
            if (select(this.hash)) {
                e.preventDefault();

                let navbar = select("#navbar");
                if (navbar.classList.contains("navbar-mobile")) {
                    navbar.classList.remove("navbar-mobile");
                    let navbarToggle = select(".mobile-nav-toggle");
                    navbarToggle.classList.toggle("bi-list");
                    navbarToggle.classList.toggle("bi-x");
                }
                scrollto(this.hash);
            }
        }, true);

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener("load", () => {
            if (window.location.hash) {
                if (select(window.location.hash)) {
                    scrollto(window.location.hash);
                }
            }
        });

        /**
         * Initiate glightbox
         */
        const glightbox = GLightbox({
            selector: ".glightbox",
        });

        /**
         * Initiate Gallery Lightbox
         */
        const galleryLightbox = GLightbox({
            selector: ".gallery-lightbox",
        });

        /**
         * Testimonials slider
         */
        new Swiper(".testimonials-slider", {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
            breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            },
        });

        /**
         * Initiate Pure Counter
         */
        new PureCounter();
    }, []);

    return (
        <>
            <Header />

            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to Medilab</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                </div>
            </section>

            <main id="main">
                {children}
            </main>

            <Footer />

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}