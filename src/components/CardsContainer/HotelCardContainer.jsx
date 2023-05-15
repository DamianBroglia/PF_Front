import React, { useEffect } from 'react';
import Hoteles from '../Cards/Hoteles';
import { Grid, Button } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { getAllHotel } from '../../redux/actions/HotelesActions';
import LoadingComponent from '../Loading/LoadingComponent';
import { Link } from 'react-router-dom';
import FilterHotel from '../Filter/FilterHotel';

export default function ActivityCardontainer() {
  const hoteles = useSelector((state) => state.hoteles.viewHoteles);
  const allHotels = useSelector((state) => state.hoteles.allHoteles);
  const dispatch = useDispatch();
  const lugar = "hotel"

  useEffect(() => {
    dispatch(getAllHotel());
  }, [dispatch]);

  return (
    <>
      <SearchBar ubicacion={lugar}/>
      <FilterHotel hoteles={allHotels} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginBottom='2em'
      >
        {hoteles.length ? (
          hoteles.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Hoteles key={index} hotel={p} />
            </Grid>
          ))
        ) : (
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            style={{ height: '100vh' }}
          >
            <Grid item>
              <LoadingComponent />
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        margin='1em'
      >
        <Link to={'/home'}>
          <Button variant='contained'>Inicio</Button>
        </Link>
      </Grid>
    </>
  );
}
