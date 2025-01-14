import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    function addMeetupHandler (data) {
        console.log(data);
    }

    return (
        <>
            <h1>New meetup page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}