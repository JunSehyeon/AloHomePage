import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Navbar() { // 함수 정의 부분을 수정
    const menuItems = ['WOMEN', 'MEN', 'ACCESSORIES', 'SHOES']
    const navigate = useNavigate()

    const gotoLogin = () => {
        navigate("/login")
    }

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }
    }

    return ( // return 문을 제대로 닫는지 확인
        <div className="navbar-container">
            <div className="nav-logo-menu">
                <div className='nav-logo'>
                    <img width={60} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alo_Yoga_logo.svg/2560px-Alo_Yoga_logo.svg.png' alt="Logo" />
                </div>
                <ul className='menuList'>
                    {menuItems.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
            <div className='together'>
                <div className='login-button' onClick={gotoLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
                <div className='search-container'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder="Search" onKeyPress={search} />
                </div>
            </div>
        </div>
    )
} // 함수 끝을 제대로 닫았는지 확인

export default Navbar; // export 문은 반드시 최상위 레벨에 있어야 함
