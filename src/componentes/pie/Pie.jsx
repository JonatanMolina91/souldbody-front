import React from 'react';
import logo from '../../assets/logo.svg';
import { Box, Typography } from '@mui/material';
import { medidasPie } from './medidasPie';

function Pie() {
    return (
        <Box
            component={'footer'}
            backgroundColor='pie.color.letras'
        >

            <Box
                component={'div'}
                display={'flex'}
                justifyContent={'space-between'}
                backgroundColor='pie.color.fondo'
                color='pie.color.letras'
            >

                <Box sx={{ width: '33%' }} component={'div'}>
                    <Box paddingLeft={"10%"} paddingTop={"10%"} component={'div'}>
                        <Typography fontSize={medidasPie.letrasCabecera}  fontWeight={'bold'} variant='h6' component={'h6'}>Teléfonos</Typography>
                        <Typography fontSize={medidasPie.letrasTexto} marginTop={1} variant='p' component={'p'}>722 129 583<br />
                            666 66 66 66</Typography>
                    </Box>
                </Box>


                <Box sx={{
                    '&>img': {
                        width: medidasPie.logo,
                        textAlign: 'center',
                    },
                    position: 'relative',
                    textAlign: 'center',
                    top: medidasPie.logoTop
                }} component={'div'}>
                    <img src={logo} />
                </Box>


                <Box
                    display={"flex"}
                    justifyContent={'end'}
                    sx={{ width: '33%' }}
                    component={'div'}>
                    <Box sx={{ textAlign: 'justify' }} paddingRight={"10%"} paddingTop={"10%"} component={'div'}>
                        <Typography fontWeight={'bold'} fontSize={medidasPie.letrasCabecera} variant='h6' component={'h6'}>Dirección</Typography>
                        <Typography fontSize={medidasPie.letrasTexto} marginTop={1} variant='p' component={'p'}>Calle Andrés Pedreño, <br />La Unión, Murcia.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box  component={'div'} backgroundColor="white" height={"1px"} width={{ xs: 'auto', sm: '100%' }}></Box> 
            <Box component={'div'}
                display={'flex'}
                justifyContent={'space-between'}
                backgroundColor='pie.color.fondo'
                color={'pie.color.letras'}
                >

                <Box width={"100%"}
                    display={"flex"}
                    justifyContent={{ xs: "center", lg: "space-between" }}
                    component={'div'}
                    color={"red"}
                    padding={'1%'}
                    flexDirection={{ xs: 'column', lg: 'row' }}>

                    <Box
                        display={'flex'}
                        component={'div'}
                        fontSize={medidasPie.letrasTexto}
                        justifyContent={{ xs: 'center', lg: 'flex-start' }}
                        width={{ xs: '100%', sm: 'auto' }}
                    >
                        <Typography marginRight={3} variant='p' component={'p'}>Aviso legal</Typography>
                        <Typography marginRight={3} variant='p' component={'p'}>Política de privacidad</Typography>
                        <Typography variant='p' component={'p'}>Política de cookies</Typography>
                    </Box>
                    <Box marginTop={1} marginBottom={1} component={'div'} backgroundColor="white" height={"1px"} width={{ xs: '100%', sm: 'auto' }}></Box> 

                    <Box component={'div'}
                        display={'flex'}
                        justifyContent={{ xs: 'center', lg: 'flex-start' }}
                        
                        width={{ xs: '100%', sm: 'auto' }}>
                            
                        <Typography fontSize={medidasPie.letrasTexto} variant='p' component={'p'}>Copyright 2024 SouldBody. Todos los derechos reservados.</Typography>
                    </Box>


                </Box>
            </Box>

        </Box>
    );
}

export default Pie;