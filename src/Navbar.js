import React from 'react'
import  {Link,useNavigate} from "react-router-dom"
import './CSS/Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
      <Link to="/">
        <span>Home</span>
        </Link>
        <Link to="/ccm" className='nav-ccm'>
        <span>찬양듣기</span>
        </Link >
        <Link to="/typing" className='nav-typing'>
        <span>타이핑 게임</span>
        </Link>
       
      </nav>
    </div>
  )
}

export default Navbar