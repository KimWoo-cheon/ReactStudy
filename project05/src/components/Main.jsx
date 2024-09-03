import React from 'react'

const Main = () => {

  console.log(JSON.parse(sessionStorage.getItem('user')))
  return (
    <div className='main-container'>
      {JSON.parse(sessionStorage.getItem('user'))?
    <h1>{JSON.parse(sessionStorage.getItem('user')).id}님 환영합니다.</h1>
    :<h2>soccer transfer market</h2>  
    }
       
       <h4>Introducing the world's most expensive soccer players.</h4>
       <h4>Build a team with the players you want</h4>
    </div>
  )
}

export default Main
