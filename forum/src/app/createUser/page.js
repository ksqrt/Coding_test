import React from 'react'

export default function page() {
  return (
    <div>
    <h4>회원가입</h4>
    <form action='/api/post/createUser' method='POST'>
        <input type='text' id='id' name='id' placeholder='id' />
        <input type='text' id='pwd' name='pwd' placeholder='pwd'/>
        <button type='submit'>버튼</button>
    </form>
</div>
  )
}
