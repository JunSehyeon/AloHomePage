import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const menuItems=['WOMEN','MEN','ACCESSORIES','SHOES']
    const navigate=useNavigate()
    const gotoLogin=()=>{
        navigate("/login")
    }
    
  return (

        <div className="navbar-container">
        <div className="nav-logo-menu">
            <div className='nav-logo'>
                <img width={60} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alo_Yoga_logo.svg/2560px-Alo_Yoga_logo.svg.png'/>
            </div>

            <ul className='menuList'>
                {menuItems.map((item, index) =>(<li key={index}>{item}</li>))}
            </ul>
            </div>
            <div className='together'>
              <div className='login-button' onClick={gotoLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
              </div>    
              <div className='search-container'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type='text' placeholder="Search"/>
              </div>
            </div>
        </div>

  )
}

export default Navbar
