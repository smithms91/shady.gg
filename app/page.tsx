"use client"
import { useRouter } from 'next/navigation';


export default function HomePage() {
  
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (e.target[0].value === 'discord') {
            console.log('nyahh');
            router.push(`/discord`);
        } else if (e.target[0].value === 'commands'){
            router.push(`/commands`);
        } else {
            //router.push(`/404`);
        }
    }

    return (
        <div className="center-box">
            <h3 className="font-mono">Enter a command:</h3>
            <form onSubmit={handleSubmit}> 
                <input className="bg-black text-white-500 p-2 font-mono" type="text" id="command-input" placeholder="ex. commands"/>
            </form>
        </div>
    )
}