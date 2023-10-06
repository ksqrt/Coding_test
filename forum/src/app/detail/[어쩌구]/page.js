import { ObjectId } from 'bson';
import {connectDB} from '../../../util/database'
import React from 'react';

async function page(props) {

  const client = await connectDB;
  const db = client.db("forum")
  let data = await db.collection('post').findOne({ _id : new ObjectId(props.params.어쩌구)})
  // console.log(data)
  console.log(props)

  return (
    <div>
      {  
                <div className="list-bg" key={data._id}>
                    <div className="list-item">
                        <h4> {data.title}</h4>
                        <p> {data.content}</p>
                    </div>
                </div>
               
        } 
    </div>
  );
}

export default page;