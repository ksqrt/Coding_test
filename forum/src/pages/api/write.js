import { connectDB } from "../../util/database.js";

export default async function write(req, res) {
  const client = await connectDB;
  const db = client.db("forum");

  if (req.method === "POST") {
    const { title, content } = req.body; // req.body에서 title과 content를 추출

    // 데이터베이스에 데이터 삽입
    await db.collection("post").insertOne({ title, content });
    
    return res.status(200).json("입력 완료");
  }
}
