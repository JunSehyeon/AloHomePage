import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Offcanvas, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuItems = ['WOMEN', 'MEN', 'ACCESSORIES', 'SHOES'];
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);

    const gotoLogin = () => {
        navigate("/login");
    };

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    const handleLogout = () => {
        setAuthenticate(false);
        navigate('/');
    };

    return (
        <>
            <div className="navbar-container">
              
                <div className="nav-logo-menu">
                    <div className='nav-logo' onClick={() => navigate('/')}>
                        <img width={60} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alo_Yoga_logo.svg/2560px-Alo_Yoga_logo.svg.png' alt="Logo" />
                    </div>
                    <ul className='menuList'>
                        {menuItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='together'>
                    {authenticate ? (
                        <div className='login-button' onClick={handleLogout}>
                            <FontAwesomeIcon icon={faUser} />
                            <div>로그아웃</div>
                        </div>
                    ) : (
                        <div className='login-button' onClick={gotoLogin}>
                            <FontAwesomeIcon icon={faUser} />
                            <div>로그인</div>
                        </div>
                    )}
                    <div className='search-container'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' placeholder="Search" onKeyPress={search} />
                    </div>
                </div>
                <div className="d-lg-none">
                    <button onClick={() => setShow(true)}>MENU</button>
                </div>
            </div>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>MENU</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        {menuItems.map((item, index) => (
                            <Nav.Link key={index} href={`#${item}`}>{item}</Nav.Link>
                        ))}
                        {authenticate ? (
                            <Nav.Link onClick={handleLogout}>LOG OUT</Nav.Link>
                        ) : (
                            <Nav.Link onClick={gotoLogin}>LOG IN</Nav.Link>
                        )}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navbar;
