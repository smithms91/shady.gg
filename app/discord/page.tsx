import Link from 'next/link';
import Image from 'next/image'
import imgSrc from '../../public/discord-mark-white.svg';

export default function DiscordPage() {

    return (
        <div className="discord-page">
            <Image className="mb-10" src={imgSrc} alt="ShadyGG Logo" width={100} height={100}/>
            <Link href="https://discord.gg/3t6N3GMGBc">
                <code className="mb-3 bg-gray-700 transition group-hover:bg-gray-500 text-gray-200 px-4 py-2 rounded relative flex">The Murder Mitten</code>
            </Link>
            <Link href="">
                <code className="mb-3 bg-gray-700 transition group-hover:bg-gray-500 text-gray-200 px-4 py-2 rounded relative flex">Secret Discord</code>
            </Link>
            <Link href="">
                <code className="mb-3 bg-gray-700 transition group-hover:bg-gray-500 text-gray-200 px-4 py-2 rounded relative flex">Secret</code>
            </Link>
        </div>
    )
}