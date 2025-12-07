import { useRouter } from 'next/navigation';
import MainForm from '../components/MainForm';

export default function HomePage() {

    return (
        <div className="center-box">
            <MainForm />
        </div>
    )
}