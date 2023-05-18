import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import LoadingComponent from '../Loading/LoadingComponent';
import { useDispatch, useSelector } from 'react-redux';
import Paquete from '../Cards/Paquetes';
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Button } from '@mui/material';
import {
  getAllPacks,
  orderPackages,
} from '../../redux/actions/packageActions';
//icons
import AvTimerIcon from '@mui/icons-material/AvTimer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveIcon from '@mui/icons-material/Remove';
//imports para los selects ⬇️⬇️⬇️⬇️⬇️
import FilterPackage from '../Filter/FilterPackage';
import { getFilterPacks } from '../../redux/actions/packageActions';

export default function PackageCardContainer() {
  const paquetes = useSelector((state) => state.packages.viewPackages);
  const dispatch = useDispatch();
  const lugar = 'package';
  const [orderPrice, setOrderPrice] = useState('nothing');
  const [orderDuration, setOrderDuration] = useState('nothing');
  const [orderRating, setOrderRating] = useState('nothing');
  const [timedMsj, setTimedMsj] = useState(false);

  const objOrder = {
    nothing: <RemoveIcon />,
    descendent: <ArrowDropDownIcon />,
    ascendent: <ArrowDropUpIcon />,
  };

  const handleFilteredPackages = (data, stars) => {
    setTimedMsj(false);
    dispatch(getFilterPacks(data, paquetes, stars));
  };

  useEffect(() => {
    dispatch(getAllPacks());
  }, [dispatch]);

  const transformOrder = (order) => {
    if (order === 'nothing') return 'descendent';
    if (order === 'descendent') return 'ascendent';
    return 'nothing';
  };

  const handleOrder = (name) => {
    if (name === 'price') {
      setOrderPrice(transformOrder(orderPrice));
      setOrderDuration('nothing');
      setOrderRating('nothing');
    } else if (name === 'duration') {
      setOrderDuration(transformOrder(orderDuration));
      setOrderPrice('nothing');
      setOrderRating('nothing');
    } else {
      setOrderRating(transformOrder(orderRating));
      setOrderPrice('nothing');
      setOrderDuration('nothing');
    }
  };

  useEffect(() => {
    if (orderPrice !== 'nothing') {
      dispatch(orderPackages(orderPrice, 'price', paquetes));
    }
  }, [orderPrice]);

  useEffect(() => {
    if (orderDuration !== 'nothing') {
      dispatch(orderPackages(orderDuration, 'duration', paquetes));
    }
  }, [orderDuration]);

  useEffect(() => {
    if (orderRating !== 'nothing') {
      dispatch(orderPackages(orderRating, 'rating', paquetes));
    }
  }, [orderRating]);

  return (
    <>
      <SearchBar ubicacion={lugar} />
      <FilterPackage handleSubmit={handleFilteredPackages} />
      <Card>
        <Grid
          display='flex'
          flexDirection='row'
          sx={{ width: '15vw', marginLeft: '2%' }}
        >
          <Grid>
            <IconButton onClick={() => handleOrder('price')}>
              {objOrder[orderPrice]}
            </IconButton>
            <Tooltip title='ordenar por precio'>
              <IconButton disableRipple onClick={() => handleOrder('price')}>
                <AttachMoneyIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid>
            <IconButton onClick={() => handleOrder('duration')}>
              {objOrder[orderDuration]}
            </IconButton>
            <Tooltip title='ordenar por duracion'>
              <IconButton disableRipple onClick={() => handleOrder('duration')}>
                <AvTimerIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid>
            <IconButton onClick={() => handleOrder('rating')}>
              {objOrder[orderRating]}
            </IconButton>
            <Tooltip title='ordenar por rating de los usuarios'>
              <IconButton disableRipple onClick={() => handleOrder('rating')}>
                <GradeIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <CardContent>
          <Grid container spacing={1}>
            {paquetes.length ? (
              paquetes.map((p, index) => (
                <Grid item xs={12} key={index}>
                  <Paquete key={index} paquete={p} />
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
                  {setTimeout(() => {
                    setTimedMsj(true);
                  }, 10000) && ""}
                  {timedMsj
                  ? (<Typography variant='h2' fontWeight="800">No hay paquetes que cumplan estos requisitos</Typography>)
                  : (<LoadingComponent/>)
                  }
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
        </CardContent>
      </Card>
    </>
  );
}
