import Link from "next/link";

const DashboardContent = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/blog/hello-world">Blog Post</Link>
            </li>
        </ul>
    )
}


export default function Dashboard() {
    return <DashboardContent />
}