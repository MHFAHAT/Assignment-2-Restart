import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-4 md:px-10 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-dashed border-gray-700 pb-12">

                {/* Brand Section */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Our Mission</li>
                        <li className="hover:text-white cursor-pointer transition">Contact Sales</li>
                    </ul>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition">Products & Services</li>
                        <li className="hover:text-white cursor-pointer transition">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer transition">Download Apps</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black rounded-full p-1"><FaXTwitter size={12} /></span>
                            @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black rounded-full p-1"><FaLinkedin size={12} /></span>
                            @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black rounded-full p-1"><FaFacebook size={12} /></span>
                            @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black rounded-full p-1"><IoMailOutline size={12} /></span>
                            support@cst.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-10 text-gray-500 text-sm">
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;