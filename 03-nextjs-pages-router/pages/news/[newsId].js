import { useParams } from "next/navigation";

export default function NewsDetailPage() {
    const params = useParams();
    console.log(params);

    return(
        <h1>The {params && params.newsId} news detail page</h1>
    );
}