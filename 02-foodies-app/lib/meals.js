import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export function getMeals() {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // throw new Error("Loading meals failed");

    return db.prepare("SELECT * FROM MEALS").all();
}

export function getMealDetails(mealId) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealId);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
    const imageExtension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}${Math.random()}.${imageExtension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed!");
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(
        `
        INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
        VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
        `
    ).run(meal);
}
