// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container text-center py-4">
                <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name</p>
                <nav className="nav justify-content-center">
                    <a className="nav-link text-white" href="/about">About</a>
                    <a className="nav-link text-white" href="/services">Services</a>
                    <a className="nav-link text-white" href="/contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
