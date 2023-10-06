import { connectDB } from "../../util/database.js"


export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let data = await db.collection('post').find().toArray() 
    console.log(data)


    return (
        <div>
        {  
                data.map((product, index) => (
                // map 반복문 사용시 키 값에 유니크 값 넣어주면 좋아요
                <div className="list-bg" key={index}>
                    <div className="list-item">
                        <h4> <a href={`/detail/${product._id}`}>{product.title}</a></h4>
                        <p> {product.content}</p>
                    </div>
                </div>
                ))
        }
        </div>
        

    )
  } 