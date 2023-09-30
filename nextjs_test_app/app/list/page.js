import Image from "next/image"
export default function List() {
  let url ="/list/detail"

  let a = [
    {
      "id": 1,
      "name": "딸기",
      "price": 20
    },
    {
      "id": 2,
      "name": "사과",
      "price": 30
    },
    {
      "id": 3,
      "name": "토마토",
      "price": 40
    }
  ]

//   console.log(a[1])

  return (
       <div>
            <h4 className='title'><a href={url} >상품목록</a></h4>
            <div>
                {a.map((product, index) => (
                // map 반복문 사용시 키 값에 유니크 값 넣어주면 좋아요
                <div className="food" key={index}>
                {/* 이미지 최적화 레이지로딩, 레이아웃 시프트 방지 */}
                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDjzXMdJ1hmP2M0E9zDzPJ02qpPx2aZICpV4J2Cq75OPTS4elDTjTQyu7ELPCcKoJCwmm8Gu9kkXR1djnMeOp8kfEO4-w=w100-h100" alt ={index.name}></img>
                {/* <Image src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDjzXMdJ1hmP2M0E9zDzPJ02qpPx2aZICpV4J2Cq75OPTS4elDTjTQyu7ELPCcKoJCwmm8Gu9kkXR1djnMeOp8kfEO4-w=w100-h100" width={100} height={100}></Image> */}
                <h4>{product.name} {product.price}원</h4>
                </div>
            ))}
            </div>

       </div>
  )
}
