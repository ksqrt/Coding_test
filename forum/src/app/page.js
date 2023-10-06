import Image from 'next/image'
import { connectDB } from "../util/database.js"
import { MongoClient } from 'mongodb';

export default async function Home() {

  // db 연결후 a 에 json 데이터 가지고 오기
  const client = await connectDB;
  const db = client.db("forum")
  let data = await db.collection('post').find().toArray()

  console.log(data)
  return (
       <div>
           {data.map((product, index) => (
                // map 반복문 사용시 키 값에 유니크 값 넣어주면 좋아요
                <div className="food" key={index}>
                <h4>제목 : {product.title}</h4>
                <h4>내용 : {product.content}</h4>
                </div>
            ))}

    
       </div>
  )
}
