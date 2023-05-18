import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { useNavigate } from 'react-router-dom';
import ActivityModal from '../CreatePackage/Modals/ActivityModal';
import axios from 'axios';
import HotelModal from '../CreatePackage/Modals/HotelModal';
import RestoModal from '../CreatePackage/Modals/RestoModal';
import styles from './CreationButtons.module.css';

export default function CreationButtons() {
  const navigate = useNavigate();
  const [openActi, setOpenActi] = useState(false);
  const [openHotel, setOpenHotel] = useState(false);
  const [openResto, setOpenResto] = useState(false);

  const defaultValuesActivity = {
    name: '',
    description: '',
    duration: '',
    price: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    typeAct: '',
  };
  const defaultValuesHotel = {
    name: '',
    location: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    description: '',
    stars: '',
    priceDay: '',
  };

  const defaultValuesResto = {
    name: '',
    location: '',
    description: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    price: '',
  };

  const goToForm = () => {
    navigate('/dashboard/form');
  };

  const handleSubmitActi = async (data) => {
    try {
      const response = await axios.post('/activity', data);
      if (response.status === 200) alert('actividad creada con exito');
      setOpenActi(false);
    } catch (error) {
      alert(error.response.data.error || error.message);
    }
  };

  const handleSubmitHotel = async (data) => {
    try {
      const response = await axios.post('/hotel', data);
      if (response.status === 200) alert('hotel creado con exito');
      setOpenHotel(false);
    } catch (error) {
      alert(error.response.data.error || error.message);
    }
  };

  const handleSubmitResto = async (data) => {
    try {
      const response = await axios.post('/restaurant', data);
      if (response.status === 200) alert('restaurant creado con exito');
      setOpenResto(false);
    } catch (error) {
      alert(error.response.data.error || error.message);
    }
  };

  return (
    <Grid className={styles.container}>
      <div className='package-summary'>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <LandscapeIcon sx={{ fontSize: 40, color: 'white' }} />
          </Grid>
          <Grid item>
            <Button
              className={`${styles.btn} ${styles.primary}`}
              onClick={() => goToForm()}
            >
              Crear paquetes
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className='package-summary'>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <DirectionsBikeIcon sx={{ fontSize: 40, color: 'white' }} />
          </Grid>
          <Grid item>
            <Box>
              <Button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => setOpenActi(true)}
              >
                Crear actividad
              </Button>
              <ActivityModal
                open={openActi}
                handleClose={() => setOpenActi(false)}
                addNewItem={handleSubmitActi}
                defaultValues={defaultValuesActivity}
              />
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className='package-summary'>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <HotelIcon sx={{ fontSize: 40, color: 'white' }} />
          </Grid>
          <Grid item>
            <Box>
              <Button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => setOpenHotel(true)}
              >
                Crear hotel
              </Button>
              <HotelModal
                open={openHotel}
                handleClose={() => setOpenHotel(false)}
                addNewItem={handleSubmitHotel}
                defaultValues={defaultValuesHotel}
              />
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className='package-summary'>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <RestaurantIcon sx={{ fontSize: 40, color: 'white' }} />
          </Grid>
          <Grid item>
            <Box>
              <Button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => setOpenResto(true)}
              >
                Crear restaurant
              </Button>
              <RestoModal
                open={openResto}
                handleClose={() => setOpenResto(false)}
                addNewItem={handleSubmitResto}
                defaultValues={defaultValuesResto}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
