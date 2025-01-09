export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Page for {params.postId}</h1>
        </main>
    );
}