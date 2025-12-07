'use client';

import Link from "next/link";
import Image from "next/image";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import toggleLightMode from "../utils/toggleLightMode";

export default function Navbar() {
    return (
        <nav className="bg-black dark:bg-red">
            <LightModeIcon onClick={toggleLightMode}/>
        </nav>
    );
}