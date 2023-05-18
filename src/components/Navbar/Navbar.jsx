import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addUser } from "../../redux/actions/UserActions";
import style from './Navbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/Horizons2.png';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const {logout, loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const admin = process.env.REACT_APP_ADMIN_USERS;

  const [data, setData] = useState({
    email : "",
    name: "",
    lastName:"",
    picture :"",
    validator: "",
    sent: false,
    admin : false,
  });
  
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };


  if (isAuthenticated && user.email) {
    
    if (!data.sent) {
      
      setData({
        email : user.email,
        name: user.given_name,
        lastName: user.family_name,
        picture :user.picture,
        validator: user.sub,
        sent : true,
        notification: false,  
      })
    }
    if(data.sent){
      dispatch(addUser(data))
    }

    return (
      <nav className={style.navbar}>
        <div className={style.container}>
          <Link to='/' >
            <img src={logo} alt='Logo' className={style.navLogo} style={{
              width : "400px",
              marginLeft: "330px"
              }}/>
          </Link>
          <div
            className={style.collapse + ' collapse navbar-collapse'}
            id='navbarNav'
          >
            <ul className={style.navbarNav + ' navbar-nav ml-auto'}>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/'>
                  Inicio
                </Link>
              </li>
              {admin.slice(",").includes(user.email)
              ? (<li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/dashboard'>
                  Administrador
                </Link>
            </li>) : ("")}
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/packagecards'>
                  Paquetes
                </Link>
              </li>
              <li
              className={`${style.navItem} nav-item dropdown ${
                showDropdown ? 'show' : ''
              }`}
              onClick={handleDropdownToggle}
            >
              <a
                className={style.navLink + ' nav-link dropdown-toggle'}
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded={showDropdown ? 'true' : 'false'}
              >
                Destinos
              </a>
              <div
                className={`${style.dropdownMenu} dropdown-menu`}
                aria-labelledby='navbarDropdown'
              >
              
                {showDropdown && (
                  <>
                    <Link
                      className='dropdown-item'
                      to='/hotelcards'
                      onClick={closeDropdown}
                    >
                      Hoteles
                    </Link>
                    <Link
                  className='dropdown-item'
                  to='/activitycards'
                  onClick={closeDropdown}
                >
                  Actividades
                </Link>
                    <Link
                      className='dropdown-item'
                      to='/restaurantcards'
                      onClick={closeDropdown}
                    >
                      Restaurantes
                    </Link>
                  </>
                )}
              </div>
            </li>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/carrito'>
                  <FaShoppingCart /> Carrito
                </Link>
  
                <Link className={style.navLink + ' nav-link'} to='/user'>
                  <FaUser /> Usuario {/* Icono de usuario de react-icons */}
                </Link>
              </li>
              <li className={style.navItem + ' nav-item ml-auto'}>
                <Link className={style.navLink + ' nav-link'} onClick={() => logout({ returnTo: window.location.origin })}>
                  Cerrar sesión <LogoutIcon/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }



  if (!isAuthenticated && !isLoading) {
    

    return (
      <nav className={style.navbar}>
        <div className={style.container}>
          <Link to='/' >
          <img src={logo} alt='Logo' className={style.navLogo} style={{
              width : "400px",
              marginLeft: "180px"
              }}/>
          </Link>
          <div
            className={style.collapse + ' collapse navbar-collapse'}
            id='navbarNav'
          >
            <ul className={style.navbarNav + ' navbar-nav ml-auto'}>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/'>
                  Inicio
                </Link>
              </li>
              <li className={style.navItem + ' nav-item'}>
                <Link className={style.navLink + ' nav-link'} to='/packagecards'>
                  Paquetes
                </Link>
              </li>
              <li
              className={`${style.navItem} nav-item dropdown ${
                showDropdown ? 'show' : ''
              }`}
              onClick={handleDropdownToggle}
            >
              <a
                className={style.navLink + ' nav-link dropdown-toggle'}
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded={showDropdown ? 'true' : 'false'}
              >
                Destinos
              </a>
              <div
                className={`${style.dropdownMenu} dropdown-menu`}
                aria-labelledby='navbarDropdown'
              >
              
                {showDropdown && (
                  <>
                    <Link
                      className='dropdown-item'
                      to='/hotelcards'
                      onClick={closeDropdown}
                    >
                      Hoteles
                    </Link>
                    <Link
                  className='dropdown-item'
                  to='/activitycards'
                  onClick={closeDropdown}
                >
                  Actividades
                </Link>
                    <Link
                      className='dropdown-item'
                      to='/restaurantcards'
                      onClick={closeDropdown}
                    >
                      Restaurantes
                    </Link>
                  </>
                )}
              </div>
            </li>
              <li className={style.navItem + ' nav-item ml-auto'}>
                <Link className={style.navLink + ' nav-link'} onClick={loginWithRedirect} >
                  <FaUser /> Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
};

export default Navbar; 

