import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";

export default function HomePage(props) {
    return (
        <>
            <h1>Home page</h1>
            <MeetupList meetups={props.meetups} />
        </>
    );
}

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://polocatic:1234@cluster0.zfuql.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    
    client.close();

    return {
        props: {
            meetups: meetups.map(item => ({
                id: item._id.toString(),
                title: item.title,
                address: item.address,
                image: item.image
            }))
        },
        revalidate: 1
    };
}
