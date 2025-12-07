import Link from "next/link";
import Image from "next/image";
import shadySVG from '../public/shady.svg';
import shadyLightSVG from '../public/shady-light.svg';

function chooseColor(color) {
    if (color == 'light') {
        return (
            <Link href="/">
                <Image className="mt-10" src={shadyLightSVG} alt="ShadyGG Logo" width={100} height={100}/>
            </Link>
        )
    } else if (color == 'dark') {
        return (
            <Link href="/">
                <Image className="mt-10" src={shadySVG} alt="ShadyGG Logo" width={100} height={100}/>
            </Link>
        )
    }
}

export default function Footer({ color }) {
    
    return <>{chooseColor(color)}</>;
}