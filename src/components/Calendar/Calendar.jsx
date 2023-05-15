import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Calendar({ handleClick }) {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const year = [2023, 2024];
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [inicio, setInicio] = useState('');
  const [last, setLast] = useState('');

  const calculateLeapYear = () => {
    const targetYear = year[currentYear];
    if (targetYear % 400 === 0) return true;
    if (targetYear % 100 === 0) return false;
    if (targetYear % 4 === 0) return true;
    return false;
  }

  const meses = {
    Enero: 1,
    Febrero: 2,
    Marzo: 3,
    Abril: 4,
    Mayo: 5,
    Junio: 6,
    Julio: 7,
    Agosto: 8,
    Septiembre: 9,
    Octubre: 10,
    Noviembre: 11,
    Diciembre: 12,
  };

  const daysPerMonth = {
    Enero: 31,
    Febrero: calculateLeapYear() ? 29 : 28, //2024 tiene 29 dias
    Marzo: 31,
    Abril: 30,
    Mayo: 31,
    Junio: 30,
    Julio: 31,
    Agosto: 31,
    Septiembre: 30,
    Octubre: 31,
    Noviembre: 30,
    Diciembre: 31,
  };

  useEffect(() => {
    const dia = new Date(Date.now());
    setCurrentMonth(dia.getMonth());
    setInicio(`${dia.getMonth()}//${dia.getDate()}//${dia.getFullYear()}`);
  }, []);

  useEffect(() => {
    setLast(inicio);
  }, [inicio]);

  const devolverFecha = (event) => {
    setLast(`${currentMonth}//${event.target.name}//${year[currentYear]}`);
    const fecha = new Date(
      `${meses[months[currentMonth]]}//${event.target.name}//${
        year[currentYear]
      }`,
    );
    const fecha2 = fecha;
    const hoy = new Date(Date.now());
    const diff = fecha2.getTime() - hoy.getTime();
    if (diff > 0) {
      handleClick(fecha);
    } else alert('No manejamos reservas para el pasado');
  };

  const handleView = (dia) => {
    const comparator = `${currentMonth}//${dia}//${year[currentYear]}`;
    if (comparator === last) {
      return 'contained';
    } else if (comparator === inicio) {
      return 'outlined';
    } else return 'text';
  };

  const renderDays = () => {
    const numberDays = daysPerMonth[months[currentMonth]];
    const fecha = new Date(
      `${meses[months[currentMonth]]}//1//${year[currentYear]}`,
    );
    const firstDay = fecha.getDay();
    const previousMonthDays =
      daysPerMonth[months[currentMonth ? currentMonth - 1 : 11]];
    let dia = 1;
    const mapeadorColumas = [0, 1, 2, 3, 4, 5];
    const mapeadorDias = [0, 1, 2, 3, 4, 5, 6];
    let referenciaInicio = 0;
    let referenciaFin = 1;
    return (
      <Box display='flex' flexDirection='column'>
        {mapeadorColumas.map((elem) => {
          if (elem === 0) {
            if (firstDay > 0) {
              return (
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-evenly'
                  key={'row' + elem}
                >
                  {mapeadorDias.map(() => {
                    if (referenciaInicio < firstDay) {
                      return (
                        <Button
                          key={'greyBI' + referenciaInicio}
                          type='button'
                          size='small'
                          disabled
                        >
                          {previousMonthDays -
                            (firstDay - 1) +
                            referenciaInicio++}
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          key={'boton' + dia}
                          variant={handleView(dia)}
                          onClick={devolverFecha}
                          name={dia}
                          type='button'
                          size='small'
                        >
                          {dia++}
                        </Button>
                      );
                    }
                  })}
                </Box>
              );
            } else
              return (
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-evenly'
                >
                  {mapeadorDias.map(() => {
                    return (
                      <Button
                        key={'greyBI' + referenciaInicio}
                        type='button'
                        size='small'
                        disabled
                      >
                        {previousMonthDays - 6 + referenciaInicio++}
                      </Button>
                    );
                  })}
                </Box>
              );
          } else {
            return (
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-evenly'
                key={'row' + elem}
              >
                {mapeadorDias.map(() => {
                  if (dia <= numberDays) {
                    return (
                      <Button
                        key={'boton' + dia}
                        variant={handleView(dia)}
                        onClick={devolverFecha}
                        name={dia}
                        type='button'
                        size='small'
                      >
                        {dia++}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        key={'greyBF' + referenciaFin}
                        type='button'
                        size='small'
                        disabled
                      >
                        {referenciaFin++}
                      </Button>
                    );
                  }
                })}
              </Box>
            );
          }
        })}
      </Box>
    );
  };

  const handleChange = (name) => {
    if (name === 'zurdo') {
      if (currentMonth > 0) {
        setCurrentMonth(currentMonth - 1);
      } else if (currentYear === 1) {
        setCurrentYear(currentYear - 1);
        setCurrentMonth(11);
      }
    } else {
      if (currentMonth < 11) {
        setCurrentMonth(currentMonth + 1);
      } else if (currentYear === 0) {
        setCurrentYear(currentYear + 1);
        setCurrentMonth(0);
      }
    }
  };

  return (
    <Box
      width='30vw'
      sx={{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Box
            display='flex'
            flexDirection='row'
            marginTop='0.5%'
            marginLeft='1%'
          >
            <Typography variant='h6'>
              {months[currentMonth]} {year[currentYear]}
            </Typography>
          </Box>
          <Box>
            <Button
              disableRipple
              onClick={() => handleChange('zurdo')}
              type='button'
              size='large'
            >
              <KeyboardArrowLeftIcon />
            </Button>
            <Button
              disableRipple
              onClick={() => handleChange('derecho')}
              type='button'
              size='large'
            >
              <KeyboardArrowRightIcon />
            </Button>
          </Box>
        </Box>
        <Box>
          <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
            <Typography variant='body1'>Do</Typography>
            <Typography variant='body1'>Lu</Typography>
            <Typography variant='body1'>Ma</Typography>
            <Typography variant='body1'>Mi</Typography>
            <Typography variant='body1'>Ju</Typography>
            <Typography variant='body1'>Vi</Typography>
            <Typography variant='body1'>Sa</Typography>
          </Box>
          <Box>{renderDays()}</Box>
        </Box>
      </Box>
    </Box>
  );
}
