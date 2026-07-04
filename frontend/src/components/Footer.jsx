import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="bg-[#f8f9fb] border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Left */}
                    <div>
                        <img
                            src={assets.logo}
                            alt="QuickStay"
                            className="h-9 mb-5 invert opacity-80"
                        />

                        <p className="text-sm text-gray-500 leading-7">
                            Discover the world's finest extraordinary places to
                            stay, from boutique hotels to luxury villas and
                            private islands.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-6">
                            <img src={assets.instagramIcon} alt="" className="w-5 cursor-pointer" />
                            <img src={assets.facebookIcon} alt="" className="w-5 cursor-pointer" />
                            <img src={assets.twitterIcon} alt="" className="w-5 cursor-pointer" />
                            <img src={assets.linkendinIcon} alt="" className="w-5 cursor-pointer" />
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-gray-800 font-semibold uppercase tracking-wider text-sm mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-gray-800 font-semibold uppercase tracking-wider text-sm mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Safety Information</a></li>
                            <li><a href="#">Cancellation Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-800 font-semibold uppercase tracking-wider text-sm mb-5">
                            Stay Updated
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mb-5">
                            Subscribe to our newsletter for inspiration and
                            special offers.
                        </p>

                        <div className="flex items-center w-full max-w-[260px] border border-gray-300 overflow-hidden rounded">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 text-sm outline-none"
                            />

                            <button className="w-12 h-10 bg-black flex items-center justify-center flex-shrink-0">
                                <img
                                    src={assets.arrowIcon}
                                    alt="Arrow"
                                    className="w-4 invert"
                                />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

                    <p>
                        © 2032 Me. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Sitemap</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;