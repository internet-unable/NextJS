import Link from "next/link";

export default function NewsPage() {
    return(
        <>
            <h1>The news page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">NextJS is a great framework</Link>
                </li>
                <li>
                    <Link href="news/something-else">Something else</Link>
                </li>
            </ul>
        </>
    );
}