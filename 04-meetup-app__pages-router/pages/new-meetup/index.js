import { useRouter } from "next/router";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler (enteredData) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enteredData)
        });
        const data = await response.json();
        console.log(data);
        router.push("/");
    }

    return (
        <>
            <h1>New meetup page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}