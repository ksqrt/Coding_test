import Image from 'next/image'
import { connectDB } from "../util/database.js"
import { MongoClient } from 'mongodb';

export default async function Home() {

  return (
       <div>
          <a href='/createUser'>회원가입</a>
          <br></br>
          <a href='/list'>글 목록</a>
          <br></br>
          <a href='/write'>글 작성</a>
          <br></br>
          <a href='/test'>test</a>
          <br></br>
       </div>
  )
}
