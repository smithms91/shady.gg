import Link from 'next/link';
import SearchForm from '../components/SearchForm';

export default function DiscordPage() {

    return <div className="discord-page">
        <Link href="/">Go back</Link>
        <SearchForm />
    </div>
}