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
                <div className="food" key={index}>
                <h4>{product.name} {product.price}원</h4>
                </div>
            ))}
            </div>

       </div>
  )
}
