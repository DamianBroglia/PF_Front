import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addRestoForm } from '../../redux/actions/formActions';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

export default function Restaurants(props) {
  const { id, name, img, price, description, rating } = props.restaurants;
  const toForm = useSelector((state) => state.form.toForm);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    if (toForm) {
      dispatch(addRestoForm(props.restaurants));
      alert('Se agregó con éxito al paquete.');
    } else {
      alert('No deberías poder ver esto.');
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
    <div className="actividad-card-container">
      <Card className="actividad-card">
        <CardActionArea key={id} component={Link} to={`/restaurant/byId/${id}`}>
          <CardMedia component="img" alt="restaurant" height="140" image={img[0]} />
          <CardContent className="actividad-card-content">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography>{price}</Typography>
            <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">
              {cutDescription(description)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {toForm && (
            <Button variant="outlined" onClick={handleClick}>
              Agregar al paquete
            </Button>
          )}
        </CardActions>
      </Card>
      <div className="actividad-card-footer">
        {/* Contenido del footer */}
      </div>
    </div>
  );
}
