import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  let name = "kang"
  let age = 20
  let link = "http://localhost:3000/list"

  return (
       <div>
          
          <h4 className="title">애플 후레시</h4>
          {/* 리엑트에서도 많이 사용되는 변수 사용법 */}
          <p className='title-sub'>by dev {name} {age} </p>
          {/* style 은 {{}} 대괄호 2개안에다 추가로 - 는 안먹히니까 카멜케이스로 작성하기 */}
          {/* <a href={link} style={{color:'red',fontSize:'30px'}}>페이지리스트</a> */}
       </div>
  )
}
