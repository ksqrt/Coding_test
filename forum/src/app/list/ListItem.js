'use client'
import Link from 'next/link'
import React from 'react'

export default function ListItem(props) {
 
    return (
    <div>
    {  
            props.result.map((product, index) => (
            // map 반복문 사용시 키 값에 유니크 값 넣어주면 좋아요
            <div className="list-bg" key={index}>
                <div className="list-item">
                    <h4> <a href={`/detail/${product._id}`}>{product.title}</a></h4>
                    {/* <p> {product.content}</p> */}
                    <Link href={`/edit/${product._id}`}>✏️</Link>
                    <span onClick={()=>{
                        fetch('/api/post/del',{
                            method : "POST",
                            body : JSON.stringify(product._id)
                            }).then(()=>{
                                console.log("delete")
                            })
                    }}>🗑️</span>
                </div>
            </div>
            ))
    }
    </div>
  )
}
