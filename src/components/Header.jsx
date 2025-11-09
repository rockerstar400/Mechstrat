// import React from "react";
// import Logo from "../assets/Logo2.png"; // आपका PNG logo

// const Header = () => {
//   return (
//     <header className="bg-white flex items-center justify-between px-12 py-2 border-b border-gray-200 relative">
//       {/* Left Logo Section */}
//       <div className="flex items-center space-x-2">
//         {/* Logo image */}
//         <img
//           src={Logo}
//           alt="MECHSTART GLOBAL"
//           className="h-14 w-auto object-contain"
//         />
//         {/* MG text */}

//       </div>

//       {/* Center Navigation Links */}
//       <nav className="flex-1 flex justify-center">
//         <ul className="flex space-x-10 text-[13px] font-medium">
//           <li>
//             <a
//               href="#"
//               className="text-[#0092b3] hover:text-[#007a94] transition-colors"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black hover:text-[#0092b3] transition-colors"
//             >
//               Leadership
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black hover:text-[#0092b3] transition-colors"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black hover:text-[#0092b3] transition-colors"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/Logo2.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/home' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            {/* Top breadcrumb bar */}




            {/* Main Header */}
            <header className="bg-white sticky top-0 z-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex items-center justify-between py-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">

                            <img
                                src={Logo}
                                alt="MECHSTART GLOBAL"
                                className="h-20 w-auto object-contain"
                            />
                            {/* MG text */}
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-10">
                            {navigation.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={` font-medium text-[14px] flex items-end transition-colors ${index === 0
                                            ? 'text-[#1695A3] hover:text-teal-700'
                                            : 'text-[#000000] hover:text-teal-600'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Bottom Border Line */}
                    <div className="h-px bg-gray-200"></div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navigation.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium text-sm transition-colors ${index === 0
                                            ? 'text-teal-600 hover:text-teal-700'
                                            : 'text-gray-800 hover:text-teal-600'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}