import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Rating from '@mui/material/Rating';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
registerLocale('es', es);



export default function CommentBoard(prop) {
    const [value, setValue] = useState(0);
    const [commentValue, setCommentValue] = useState('');
    const [existingComments, setExistingComments] = useState([]);
    const [errors, setErrors] = useState(false);
    const user = useSelector((state) => state.users.user)
    const navigate = useNavigate()


    const date = new Date();

    const handleChange = (e) => {
        setValue(e.target.value)
    };


    const handleComment = (event) => {
        //ahora mismo el usuario puede poner todos los saltos de linea que quiera
        //no se me ocurre como frenarlo
        setCommentValue(event.target.value);
    };


    useEffect(() => {
        setErrors(commentValue.split('\n').length > 7 ? true : false);
    }, [commentValue]);

    const handleSend = () => {
        if (commentValue && value && !errors) {
            const nuevoComentario = {
                userName: user.email,
                userId: user.id,
                date: date,
                comment: commentValue,
                rating: value,
            };
            if (prop.activityId) nuevoComentario.activityId = prop.activityId;
            if (prop.hotelId) nuevoComentario.hotelId = prop.hotelId;
            if (prop.restaurantId) nuevoComentario.restaurantId = prop.restaurantId;
            if (prop.packageId) nuevoComentario.packageId = prop.packageId;

            axios.post('/comments', nuevoComentario).then((response) => {
                if (response.data) {
                    alert('Comentario posteado con exito');
                }
            });

            setExistingComments([...existingComments, nuevoComentario]);
            setValue(0)
            setCommentValue('');
            navigate(0)
        } else alert('falta el comentario o la calificacion');
    };

    const handleOnClick = async (e) => {
        try {
            const { value } = e.target
            console.log(value);
            const commentDeleted = await axios.delete(`/comments/${user.id}/${value}`)
            if (commentDeleted) {
                alert("Comentario eliminado")
                navigate(0)
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Card
                sx={{
                    // backgroundColor: 'warning.main',
                    // width: '70vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {user.id ? 
                                <Card
                                sx={{
                                    // border: '1px solid black',
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: '1%',
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <CardHeader
                                    title={
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: '66vw',
                                                justifyContent: 'space-between',
                                                // margin: '1.5% 1% 0% 1%',
                                                backgroundColor: "green",
                                                color: "white",
                                                alignItems: "center",
                                                height: "66px",
                                                borderBottomStyle: "solid",
                                                borderBottomWidth: "10px",
                                                borderBottomColor: "rgb(29 102 203)",
                                                paddingTop: "24px",
                                                paddingInline: "20px"
                                            }}
                                        >
                                            <Typography
                                                variant='h4'
                                                display='inline'
                                                sx={{ marginRight: '1%', marginLeft: '1%' }}
                                            >
                                                {user.email}
                                            </Typography>
                                            <Typography variant='h5' display='inline'>
                                                {date.toLocaleDateString('es', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </Typography>
                                        </Box>
                                    }
                                />
            
            
                                <TextField sx={{
                                    width: "1300px"
                                }}
                                    multiline
                                    rows={6}
                                    onChange={handleComment}
                                    value={commentValue}
                                    placeholder='deja tu comentario...'
                                    error={errors}
                                    helperText={errors ? 'no mas de 7 saltos de linea' : ''}
                                />
                                <Typography sx={{
                                    fontSize: "24px",
                                    alignItems: "center",
                                    borderTop: "10px"
                                }}
                                    display='flex'
                                    variant='subtitle1'>
                                    valoracion:
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={handleChange}
                                        size="large"
                                    />
                                </Typography>
                                <CardActions sx={{ marginTop: '15px' }}>
                                    <Button size="medium" variant="contained" onClick={handleSend}>Postear</Button>
                                    <Button size="medium" variant="contained" onClick={() => setCommentValue("")}>Cancelar</Button>
                                </CardActions>
                            </Card>:
                            <Typography sx={{fontSize:"25px"}}> Logueate para dejar tu comentario!</Typography>
            }


                <CardContent
                    sx={{
                        backgroundColor: 'white',
                        width: '66vw',
                        borderTop: '0',
                    }}
                >
                    {prop.arrayComments ? (
                        <Box sx={{ fontFamily: 'sans-serif', padding: 0, marginTop: "35px" }}>
                            <Typography variant='h2' gutterBottom>
                                Comentarios:
                            </Typography>
                            <Grid
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'left',
                                    marginTop: '1%',
                                }}
                            >
                                {prop.arrayComments
                                    .concat(existingComments)
                                    .reverse()
                                    .map((elem, index) => (
                                        <Card
                                            key={index}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    justifyContent: 'space-between',
                                                    margin: '1% 1% 1% 1%',
                                                }}
                                            >
                                                <Typography
                                                    variant='h4'
                                                    textAlign='left'
                                                    display='inline'
                                                >
                                                    {elem.userName}
                                                </Typography>
                                                <Typography
                                                    variant='h6'
                                                    sx={{ color: 'grey' }}
                                                    display='inline'
                                                >
                                                    {elem.date.toString().slice(0, 10)}

                                                </Typography>
                                                <Rating
                                                    name="read-only"
                                                    value={elem.rating}
                                                    readOnly
                                                    size="large" />
                                            </Box>
                                            <CardContent
                                                sx={{
                                                    width: '80%',
                                                    marginLeft: '3%',
                                                }}
                                            >
                                                <Typography
                                                    textAlign='left'
                                                    variant='h5'
                                                    sx={{
                                                        whiteSpace: 'pre-line',
                                                        color: "grey",
                                                        fontFamily: "inherit"
                                                    }}
                                                >
                                                    "{elem.comment}"
                                                </Typography>
                                            </CardContent>

                                            {elem.userId === user.id ?
                                                <Button sx={{
                                                    marginLeft: "1000px"
                                                }}
                                                    size='small'
                                                    variant='contained'
                                                    value={elem.id}
                                                    onClick={(e) => handleOnClick(e)}
                                                >
                                                    Borrar Comentario
                                                </Button> :
                                                null
                                            }
                                        </Card>
                                    ))}
                            </Grid>
                        </Box>
                    ) : 
                    <Typography sx={{fontSize:"25px"}}> No hay comentarios, deja el primero!</Typography>
                    }
                </CardContent>
            </Card>
        </Box>
    );
}

