import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1 style={{ color: "white", textAlign: "center" }}>
                Time to get started!
            </h1>
            <p><Link href="/meals">Go to meals page</Link></p>
            <p><Link href="/meals/share">Go to meal share page</Link></p>
            <p><Link href="/community">Go to community page</Link></p>

            <p><Link href="/meals/meal-1">Go to meal-1 detail page</Link></p>
            <p><Link href="/meals/meal-2">Go to meal-2 detail page</Link></p>
        </main>
    );
}
