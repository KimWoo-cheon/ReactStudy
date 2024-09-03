import React from 'react'
import { useLocation } from 'react-router-dom'


const Mypage = () => {

  const loc = useLocation()
  console.log(loc.state.id)
  return (
    <div>
      {loc.state.id && <p>{loc.state.id}님의 마이페이지</p>}
      Mypage
    </div>
  )
}

export default Mypage
