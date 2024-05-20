import React from 'react';
import { Box, Typography } from '@mui/material';
import Articulo from './Articulo';
import imgPersonal from '../../../assets/fotosSeccion/personal.jpg';
import imgGrupos from '../../../assets/fotosSeccion/grupos.jpg';
import { medidasSeccion } from './medidasSeccion';

const articulos = [
    {
        titulo: "Entrenamiento Personal",
        texto: (<span>SoulBody te ofrece la posibilidad de ser atendido por un especialista en entrenamiento y la salud, para que puedas mejorar tu condición física y tu calidad de vida de forma efectiva. Pero, ¿el entrenamiento personal es para mi?<br/><br/>
        ¿Quieres conseguir un objetivo y no tienes las herramientas o conocimiento necesario? ¿Mejorar tu composición corporal? ¿Tienes obesidad? ¿Hipertensión? ¿Te presentas a una oposición del cuerpo de seguridad del Estado? ¿Alguna lesión muscular? ¿U osteoarticular?<br/><br/>
        Nuestros Coaches te ayudaran a conseguir tus objetivos atendiendo a tu situación personal, enseñándote la técnica correcta de cada ejercicio y su dosis de intensidad deseada.</span>),
        imagen: imgPersonal,
    },

    {
        titulo: "Entrenamiento en grupos reducidos",
        texto: (<span>Te ofrecemos la oportunidad de entrenar con un entrenador personal en grupos reducidos de entre 6-8 usuarios. Tendrás una mayor motivación, ya que cada participante del grupo se unirán para alcanzar objetivos individuales y de grupo. Optimizamos tu tiempo de entrenamiento y además entrena la fuerza, mejora la resistencia, aumenta tu flexibilidad y disminuye el riesgo de lesión de forma divertida y dinámica. Contamos con varios grupos de entrenamiento dependiendo de tu objetivo:<br/><br/>
       - Perdida de grasa.<br/><br/>
       - Salud y ejercicio físico.<br/><br/>
       - Entrenamiento funcional y/o Rendimiento.</span>),
        imagen: imgPersonal,
    },
];


const Seccion = () => {
    return (
        <Box 
        padding={5}
        component={'div'}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography fontSize={medidasSeccion.letrasTitulo} variant='h4'>ENTRENAMIENTO PERSONAL & GRUPOS REDUCIDOS</Typography>
            <Typography fontSize={medidasSeccion.letrasSubtitulo} color={'#AA0000'} variant='h5'>QUÉ ES Y EN QUÉ CONSISTE</Typography>
            {articulos.map((articulo, index) => <Articulo key={index} reverse={index===0?true:false} articulo={articulo}/>)}
        </Box>
    );
};

export default Seccion;