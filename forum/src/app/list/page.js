
import Link from "next/link.js";
import { connectDB } from "../../util/database.js"
import ListItem from "./ListItem"

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray() 
    // console.log(data)


    return (
        <div className="list-bg">
            <ListItem result={result}></ListItem>
        </div>
        

    )
  } 