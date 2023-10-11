import React from 'react'
import { connectDB } from "../../../util/database.js"
import { ObjectId } from 'bson';

export default async function page(props) {
    const client = await connectDB; 
    const db = client.db("forum")
    let data = await db.collection('post').findOne({_id : new ObjectId(props.params.id)}) 

    // await db.collection('post').updateOne({_id : new ObjectId(props.params.id)})
  
    return (
    <div>
        글번호 : {data._id}
        <h4>글수정</h4>
        <form action='/api/post/edit' method='POST'>
            <input type='hidden' id='_id' name='_id' placeholder='아이디' value={data._id} />
            <input type='text' id='title' name='title' placeholder='제목' value={data.title} onchange="handleTitleChange(this)"/>
            <input type='text' id='content' name='content' placeholder='내용'value={data.content} onchange="handleTitleChange(this)"/>
            <button type='submit'>버튼</button>
        </form>
    </div>
  )
}
