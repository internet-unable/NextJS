export default async function MealDetailPage({ params }) {
    const { mealId } = await params;

    return (
        <h1>Page for {mealId}</h1>
    );
}