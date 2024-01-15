import React from 'react'

export default function page() {
  return (
    <div>
        <h4>글작성</h4>
        <form action='/api/post/write' method='POST'>
            <input type='text' id='title' name='title' placeholder='제목' />
            <input type='text' id='content' name='content' placeholder='내용'/>
            <button type='submit'>버튼</button>
        </form>
    </div>
  )
}
