export default function toggleLightMode() {
    document.documentElement.classList.contains("dark")
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    } else if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    }
}