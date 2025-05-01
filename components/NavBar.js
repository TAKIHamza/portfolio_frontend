"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="border-b pb-2  w-full  backdrop-blur-xl top-0  dark:bg-white dark:border-gray-700 xl:fixed xl:w-full xl:top-0 xl:left-0 xl:z-30 fixed z-50 ">
        <div className="container mx-auto  w-full  pt-2 bg-white-100   ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-1 md:py-2 md:block">
                   
                    
                    <h1 className="text-2xl md:text-3xl font-bold font-mono 
               bg-gradient-to-r from-cyan-800 via-sky-700 to-cyan-600
               bg-clip-text text-transparent
               hover:from-pink-600 hover:to-purple-600 
               transition-all duration-300">
  TAKI
</h1>
                        <div className="md:hidden">
                            <button
                                className="p-2  text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        

                        <ul className=" lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                                <li className="max-w-max">
                                    <Link href="/" className="block  md:px-3 group">
                                    <div
                                            className="relative text-gray-600 dark:text-gray-300
                                                    before:absolute before:-bottom-2 md:before:-bottom-3 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">Home</span>
                                        </div>
                            
                                    </Link>
                                </li>
                                <li className="max-w-max">
                                    <Link href="/skills" className="block md:px-3 group">
                                        <div
                                            className="relative text-gray-600 dark:text-gray-300
                                                    before:absolute before:-bottom-2 md:before:-bottom-3 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">skills</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="max-w-max">
                                    <Link href="/profile" className="block md:px-3 group">
                                        <div
                                            className="relative text-gray-600 dark:text-gray-300
                                                    before:absolute before:-bottom-2 md:before:-bottom-3 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">profile</span>
                                        </div>
                                    </Link>
                                </li>
                                
                            </ul>

                        
                    </div>
                    
                    
                </div>
                <div className={` justify-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}>
                
                        <ul className=" lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                        <li className="max-w-max">
                                <Link href={"login"} className="block md:px-3 group">
                                        <div
                                            className="relative text-gray-600 dark:text-gray-300
                                                    before:absolute before:-bottom-2 md:before:-bottom-3 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">Login</span>
                                        </div>
                                        </Link>
                                </li>
                               
                            </ul>
                        
                        </div>
            </div>
        </div>
        </nav> 
    );
}