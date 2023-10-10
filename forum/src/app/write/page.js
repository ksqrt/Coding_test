import React from 'react'

export default function page() {
  return (
    <div>
        <h4>글작성</h4>
        <form action='/api/test' method='POST'>
            <input>제목 : </input>
            
            <button type='submit'>버튼</button>
        </form>
    </div>
  )
}
