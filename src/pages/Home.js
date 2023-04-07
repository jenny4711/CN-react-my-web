import React from 'react'
import '../CSS/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()

  return (
    <div className='Home' style={{
      backgroundImage: "url(./img/topbk.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh",
      

    }}>
      <div className='Home-text'>
 <div>
      <h1 >Praise Typing Game</h1>
    <h6>How Good it is to be near God!</h6>
    </div>
    <div className='Home-btns'>
    <button onClick={()=>navigate('/ccm')} className='Home-btn'><span>Listening to Praise</span></button>
    <button onClick={()=>navigate('/typing')} className='Home-btn'><span>Play typing Game</span></button>
    </div>
   
       </div>
      
      
    
    </div>
  )
}

export default Home