import Link from "next/link";

import Header from "@/components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p>
                <Link href="/about">Go to About us page</Link>
            </p>
            <p>
                <Link href="/blog">Go to Blog page</Link>
            </p>
        </main>
    );
}
