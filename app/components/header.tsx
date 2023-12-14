'use client'
import Image from 'next/image'
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="p-4 pl-12 pr-12 border-b border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex">
                    <Image
                        src="/icons/ravel_icon.png"
                        alt="image"
                        width={40}
                        height={45}
                        priority
                    />
                    <div className="ml-3">
                        <div className='h-3'><small><b>Fabrotec Test</b></small></div>
                        <div className='h-3'><small>Dea Bagus Sulaeman</small></div>
                    </div>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <a href="#" className="font-bold text-green-500">Home</a>
                    <a href="#" className="font-bold">Other Menu</a>
                </nav>
                <div className="md:flex items-center">
                    <div className="md:ml-4 hidden md:block">
                        <span className="float-left mr-2">Halo, Dea</span>
                        <Image
                            src="/icons/user_icon.png"
                            alt="image"
                            width={30}
                            height={30}
                            priority
                        />
                    </div>
                    <button className="md:hidden " onClick={toggleMobileMenu}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="bg-black bg-opacity-70 font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 absolute left-0 w-full pr-4">
                    <li className="mb-1">
                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li className="mb-1">
                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Other Menu
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;