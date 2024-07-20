"use client";
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { MdOutlineLightMode } from "react-icons/md";
const NavBar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <div className="parent-navbar">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/download">Download</Link></li>
                </ul>
                <button onClick={() =>{setTheme(theme === "dark" ? "light" : "dark") , console.log("welcome")}}><MdOutlineLightMode /></button>
            </div>
        </div>
    );
}

export default NavBar;
