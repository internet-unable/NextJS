import sql from "better-sqlite3";

const db = sql("meals.db");

export function getMeals() {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // throw new Error("Loading meals failed");

    return db.prepare("SELECT * FROM MEALS").all();
}

export function getMealDetails(mealId) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealId);
}