import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

import { getMealDetails } from "@/lib/meals";

export default async function MealDetailPage({ params }) {
    const { mealId } = await params;
    const mealDetails = getMealDetails(mealId);

    if(!mealDetails) {
        notFound();
    }

    mealDetails.instructions = mealDetails.instructions.replace(/\n/g, "<br />");

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={mealDetails.image} alt={mealDetails.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{mealDetails.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${mealDetails.creator_email}`}>{mealDetails.creator}</a>
                    </p>
                    <p className={classes.summary}>{mealDetails.summary}</p>
                </div>
            </header>

            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: mealDetails.instructions
                    }}
                ></p>
            </main>
        </>
    );
}
