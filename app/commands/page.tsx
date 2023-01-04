import styles from './style.module.css';


export default function CommandsPage() {
    return (
        <>
            <h1 className={styles.commandsHeader}>Hey. Try these!</h1>
            <div className="list">
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        Discord
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        GPT
                    </li>
                </ul>
            </div>
        </>
    )
}