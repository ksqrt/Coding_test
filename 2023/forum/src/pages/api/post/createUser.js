import { connectDB } from "../../../util/database.js";

export default async function createUser(req, res) {
  const client = await connectDB;
  const db = client.db("forum");

  if (req.method == "POST") {
    const { id, pwd } = req.body; // req.body에서 title과 content를 추출

    // 예외 처리해주기
    if(id == '' || pwd ==''){
      return res.status(500).json('너 왜 아이디 입력 안함 ?')
    }
    const idCheck = await db.collection("user").countDocuments({ id });
    if(idCheck == 0 ){
        // 데이터베이스에 데이터 삽입
        await db.collection("user").insertOne({ id, pwd });
        return res.status(200).json('회원가입 성공')
    }
    else{
        return res.status(500).json('이미 가입된 아이디 입니다.')
    }
  }
}
