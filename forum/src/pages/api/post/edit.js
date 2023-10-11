import { connectDB } from "../../../util/database.js";

export default async function edit(req, res) {
  const client = await connectDB;
  const db = client.db("forum");



  if (req.method == "POST") {
    const { _id, title, content } = req.body; // req.body에서 title과 content를 추출
    
    // 예외 처리해주기
    if(title == '' || content ==''){
      return res.status(500).json('너 왜 제목or 글 안씀?')
    }
    await db.collection('post').updateOne({_id : new ObjectId(props.params.id)})
    // 데이터베이스에 데이터 삽입
    
    return res.status(200).redirect('/list')
  }
}
