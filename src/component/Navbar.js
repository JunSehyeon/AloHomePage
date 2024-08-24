import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Offcanvas, Nav, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuItems = ['WOMEN', 'MEN', 'ACCESSORIES', 'SHOES'];
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);

    const gotoLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        setAuthenticate(false);
        navigate('/');
    };

    const search = (event) => {
        if (event.key === "Enter") {
            const keyword = event.target.value.trim();
            if (keyword) {
                navigate(`/?q=${keyword}`);
            } else {
                navigate('/'); // 검색어가 없으면 홈으로 이동
            }
            setShow(false); // 사이드 메뉴 닫기
        }
    };

    return (
        <>
            <div className="navbar-container d-flex justify-content-between align-items-center">
                {/* PC에서만 보이는 메뉴 */}
                <div className="d-none d-lg-flex align-items-center w-100">
                    <div className='nav-logo' onClick={() => navigate('/')}>
                        <img width={60} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alo_Yoga_logo.svg/2560px-Alo_Yoga_logo.svg.png' alt="Logo" />
                    </div>
                    <ul className='menuList d-flex mx-3'>
                        {menuItems.map((item, index) => (
                            <li key={index} className="mx-2">{item}</li>
                        ))}
                    </ul>
                    <div className="d-flex ms-auto align-items-center">
                        <div className='login-button mx-2 d-flex align-items-center' onClick={authenticate ? handleLogout : gotoLogin}>
                            <FontAwesomeIcon icon={faUser} />
                            <span className="ms-1">{authenticate ? '로그아웃' : '로그인'}</span>
                        </div>
                        <div className='search-container'>
                            <InputGroup>
                                <InputGroup.Text id="search-icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                                <Form.Control
                                    type='text'
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-icon"
                                    onKeyPress={search}
                                />
                            </InputGroup>
                        </div>
                    </div>
                </div>

                {/* 모바일에서만 보이는 메뉴 */}
                <div className="d-lg-none d-flex align-items-center w-100 justify-content-between">
                    <div className='d-flex align-items-center'>
                        <div className='nav-logo' onClick={() => navigate('/')}>
                            <img width={40} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alo_Yoga_logo.svg/2560px-Alo_Yoga_logo.svg.png' alt="Logo" />
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='login-button d-flex align-items-center me-2' onClick={authenticate ? handleLogout : gotoLogin}>
                            <FontAwesomeIcon icon={faUser} />
                            <span className="ms-1">{authenticate ? '로그아웃' : '로그인'}</span>
                        </div>
                        <div className='search-container d-flex align-items-center'>
                            <InputGroup>
                                <InputGroup.Text id="search-icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                                <Form.Control
                                    type='text'
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-icon"
                                    onKeyPress={search}
                                    style={{ width: '100px' }}  // 모바일에서 검색창 너비를 줄였습니다.
                                />
                            </InputGroup>
                        </div>
                    </div>
                    <button onClick={() => setShow(true)} className="menu-button ms-2" style={{ background: 'none', border: 'none' }}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                </div>
            </div>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>MENU</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column mb-3">
                        {menuItems.map((item, index) => (
                            <Nav.Link key={index} onClick={() => setShow(false)} href={`#${item}`} style={{ color: 'black' }}>
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Navbar;
