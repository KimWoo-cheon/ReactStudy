import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  const handleLogout=()=>{
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className='header-container'>
       <div className='link-container'>
        <Link to='/'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFP60pUdPsK5Wir7qm-D2KnL8Kyz3Re2qFg&s' height='75px'></img></Link>
       </div>
       <div className='link-container'>
        <Link to="/list">List</Link>
        <Link to="https://github.com/woocheonK/woocheonK.github.io?tab=readme-ov-file#woocheonkgithubio">github</Link>
       </div>
        
       <div className='link-container'>
       {JSON.parse(sessionStorage.getItem('user'))
       ?<span onClick={handleLogout}>로그아웃</span>
       :<Link to="/Login">로그인</Link>
      }
        
        

       </div>
    </div>
  )
}

export default Header
