import React from "react"
import { Link, usePage } from "@inertiajs/inertia-react"

export default function Header() {
    const {url} = usePage();

    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                        <i className="bi bi-phone"></i> +1 5589 55488 55
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="">Medilab</a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link href="/" className={url === '/' ? "nav-link active" : "nav-link"}>Home</Link></li>
                            <li><Link href="/about" className={url.startsWith('/about') ? "nav-link active" : "nav-link"}>About</Link></li>
                            <li><Link href="/departments" className={url.startsWith('/departments') ? "nav-link active" : "nav-link"}>Departments</Link></li>
                            <li><Link href="/doctors" className={url.startsWith('/doctors') ? "nav-link active" : "nav-link"}>Doctors</Link></li>
                            <li><Link href="/faq" className={url.startsWith('/faq') ? "nav-link active" : "nav-link"}>FAQ</Link></li>
                            <li><Link href="/testimonials" className={url.startsWith('/testimonials') ? "nav-link active" : "nav-link"}>Testimonials</Link></li>
                            <li><Link href="/gallery" className={url.startsWith('/gallery') ? "nav-link active" : "nav-link"}>Gallery</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>
    )
}