import { ObjectId } from "bson";
import { connectDB } from "../../../util/database.js";

export default async function del(req, res) {
  const client = await connectDB;
  const db = client.db("forum");

  if (req.method == "POST") {
  console.log(req.body)
    // 데이터베이스에 데이터 삽입
  await db.collection("post").deleteOne({"_id": req.body});

  res.status(200).redirect('/list')
  }



}
