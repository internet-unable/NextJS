// /api/new-meetup

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const client = await MongoClient.connect("mongodb+srv://polocatic:1234@cluster0.zfuql.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
        const db = client.db();
        const meetupCollection = db.collection("meetups");

        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(210).json({message: "Meetup added"});
    }
}
