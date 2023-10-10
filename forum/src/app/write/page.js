import React from 'react'

export default function page() {
  return (
    <div>
        <h4>글작성</h4>
        <form action='/api/write' method='POST'>

            <label htmlFor='title'>제목 : </label>
            <input type='text' id='title' name='title' />
            <br></br>
            <label htmlFor='content'>내용 : </label>
            <input type='text' id='content' name='content' />
            <br></br>
            <button type='submit'>버튼</button>
        </form>
    </div>
  )
}
