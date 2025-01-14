import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first meetup",
        description: "This is a first meetup",
        address: "Some address 1, 12345 Some city",
        image: "https://vivo.tech/cdn/shop/articles/Blog_Cover_Image_2_800x.jpg",
    },
    {
        id: "m2",
        title: "A second meetup",
        description: "This is a second meetup",
        address: "Some address 2, 5678910 Some city",
        image: "https://vivo.tech/cdn/shop/articles/Blog_Cover_Image_2_800x.jpg",
    },
];

export default function HomePage(props) {
    return (
        <>
            <h1>Home page</h1>
            <MeetupList meetups={props.meetups} />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
    };
}
