import React from 'react'
import { connectDB } from "../../../util/database.js"
import { ObjectId } from 'bson';

export default async function page(props) {
    const client = await connectDB; 
    const db = client.db("forum")
    let data = await db.collection('post').findOne({_id : new ObjectId(props.params.id)}) 

    // await db.collection('post').updateOne({_id : new ObjectId(props.params.id)})
  
    return (
    <div className="write">
    <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={data.title}/>
        <input name="content" defaultValue={data.content}/>
        <input type="hidden"name="_id" defaultValue={data._id.toString()}/>
        <button type="submit">전송</button>
    </form>
    </div> 
  )
}
