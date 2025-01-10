import { Suspense } from "react";
import Link from "next/link";

import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid/MealsGrid";

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose you favorite recipe and cook it yourself. It's easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>

            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}