import { connectDB } from "../../util/database.js"
export default async function list(req,res) {
    const client = await connectDB;
    const db = client.db("forum")
    let data = await db.collection('post').find().toArray() 
    
    if(req.method == "GET") {
        return res.status(200).json(data)
    }
}
