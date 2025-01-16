import { Head } from "next/document";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetailPage(props) {
    return (
        <>
            <Head>
                <title>{props.meetup.title}</title>
                <meta name="description" content={props.meetup.description} />
            </Head>

            <MeetupDetail
                image={props.meetup.image}
                title={props.meetup.title}
                address={props.meetup.address}
                description={props.meetup.description}
            />
        </>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://polocatic:1234@cluster0.zfuql.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map((item) => ({
            params: { meetupId: item._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(
        "mongodb+srv://polocatic:1234@cluster0.zfuql.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

    return {
        props: { 
            meetup: {
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description
            }
        },
    };
}
