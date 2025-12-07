import Link from 'next/link';
import Image from 'next/image'
import imgSrc from '../../public/discord-mark-white.svg';


export default function RandomPage({params}) {
    let str = params.slug;
    let fixedString = decodeURI(str);

    return (
        <div className="discord-page">
            <h1 className="mb-10 text-5xl decoration-sky-500">The {fixedString} page</h1>
            <p className='underline decoration-sky-600 hover:decoration-red-400'>We don't know a lot about this page.. but it definitely exists!</p>
        </div>
    )
}