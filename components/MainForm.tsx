'use client';

import Link from "next/link";
import Image from "next/image";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useRouter } from "next/navigation";


export default function Navbar() {
    
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (e.target[0].value === 'discord') {
            console.log('nyahh');
            router.push(`/discord`);
        } else if (e.target[0].value === 'commands'){
            router.push(`/commands`);
        } else {
            router.push(`/${e.target[0].value}`);
        }
    }

    return (
        <>
            <h3 className="font-mono">Enter a command:</h3>
            <form onSubmit={handleSubmit}>       
                <input className="bg-black text-white-500 p-2 font-mono" type="text" id="command-input" placeholder="ex. commands"/>
            </form>
        </>
    );
}