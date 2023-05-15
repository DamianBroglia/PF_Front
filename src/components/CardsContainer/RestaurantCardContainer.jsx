import React, { useEffect } from 'react';
import Restaurants from '../Cards/Restaurants';
import { Grid, Button } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurant } from '../../redux/actions/RestaurantsActions';
import LoadingComponent from '../Loading/LoadingComponent';
import { Link } from 'react-router-dom';
import FilterRestaurant from '../Filter/FilterRestaurant';

export default function RestaurantCardContainer() {
  const restaurants = useSelector((state) => state.restaurants.viewRestaurants);
  const allRestaurant = useSelector(
    (state) => state.restaurants.allRestaurants,
  );
  const dispatch = useDispatch();
  const lugar = "restaurant"

  useEffect(() => {
    dispatch(getAllRestaurant());
  }, [dispatch]);

  return (
    <>
      <SearchBar ubicacion={lugar}/>
      <FilterRestaurant restaurant={allRestaurant} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        marginBottom='2em'
      >
        {restaurants.length ? (
          restaurants.map((p, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Restaurants key={index} restaurants={p} />
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
