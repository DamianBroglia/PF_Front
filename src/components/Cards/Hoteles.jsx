import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addHotelForm } from '../../redux/actions/formActions';
import { agregarHotel } from '../../redux/actions/carritoActions';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import './Hoteles.css'; // Importar el archivo CSS

export default function Hoteles(props) {
  const { id, name, description, img, priceDay, rating } =
    props.hotel;
  const user = useSelector((state) => state.users.user);
  const toForm = useSelector((state) => state.form.toForm);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    if (toForm) {
      dispatch(addHotelForm(props.hotel));
      alert('se agrego con exito');
    } else {
      dispatch(agregarHotel(props.hotel));
      alert('Se agrego el hotel al carrito.');
    }
  };

  const cutDescription = (description) => {
    var nuevaDesc = description;
    if (description.length > 250) {
      nuevaDesc = nuevaDesc.slice(0, 250);
      nuevaDesc += '...';
    }
    return nuevaDesc;
  };

  return (
    <Card className="hotel-card"> {/* Agregar la clase CSS al componente Card */}
      <CardActionArea key={id} component={Link} to={`/hotel/byId/${id}`}>
        <CardMedia component='img' alt='hotel' height='140' image={img[0]} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography>{priceDay}</Typography>

          <Rating
            name='half-rating-read'
            value={rating}
            precision={0.5}
            readOnly
          />
          <Typography variant='body2' color='text.secondary'>
            {cutDescription(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        className="hotel-card-footer" // Agregar la clase CSS al componente Grid
      >
        <CardActions>
          {Object.values(user).length?
          (
          <Button variant='outlined' onClick={handleClick}>
            {toForm ? 'Agregar al paquete' : 'Agregar al carrito'}
          </Button>) : ("")}
        </CardActions>
      </Grid>
    </Card>
  );
}
