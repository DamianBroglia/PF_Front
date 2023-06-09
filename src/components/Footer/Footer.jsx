import React, { useState } from 'react';
import './Footer.css';
import BasicModal from '../CreatePackage/Modals/BasicModal';
import UserFeedback from '../MailSend/UserFeedback';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSpam } from '../../redux/actions/UserActions';

function Footer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const handleNav = (name) => {
    navigate(name);
  }

  const handleSpam = () => {
    dispatch(setSpam(user.id, user.notification));
  }

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-options'>
          {/*<a onClick={() => alert("no es mucho, pero es trabajo honrado")}>Acerca de nosotros</a>*/}
          <a onClick={() => handleNav("/activitycards")}>Destinos turísticos</a>
          <a onClick={() => handleNav("/packagecards")}>Reservas y precios</a>
          <a onClick={() => setOpen(true)}>Contacto</a>
          <Box>
          <BasicModal
            open={open}
            handleClose={() => setOpen(false)}
            title=""
            content={<UserFeedback handleClose={() => setOpen(false)}/>}
            handleSubmit={false}
          />
          </Box>
        </div>
        <div className='footer-text'>
          <p>
            Explora y descubre nuevos lugares para visitar en tus próximas
            vacaciones.
          </p>
          <p>
            Suscríbete a nuestro boletín y recibe ofertas exclusivas para
            viajar.
          </p>
          {Object.values(user).length?
          (
            <button onClick={handleSpam}>{user.notification? ("desuscribirse") : ("suscribirse")}</button>
          ) : ("*solo para usuarios registrados*")
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;