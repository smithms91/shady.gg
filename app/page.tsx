"use client"
import { useRouter } from 'next/navigation';






export default function HomePage() {

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (e.target[0].value === 'discord') {
            console.log('discord');
            router.push("/discord");
        } else {
    
            console.log('nah');
        }
    }


    return (
        <div className="center-box">
            <h3>Enter a command:</h3>
            <form onSubmit={handleSubmit}> 
                <input type="text" id="command-input" placeholder="ex. commands"/>
            </form>
        </div>
    )
}