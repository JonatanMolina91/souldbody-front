import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';
import coachService from '../../../services/coachServices';
import TimeCustom from '../../../componentes/TimeCustom';
import DateCustom from '../../../componentes/DateCustom';

const CategoriaDialog = ({ openDailog, setOpenDialog, row, deleter }) => {

  const { funciones } = useFunciones();
  const [inputValue, setInputValue] = useState('');
  const { getCoaches } = coachService;
  const [coaches, setCoaches] = useState();
  const [actual, setActual] = useState({
    id: -1,
    nombre: '',
    descripcion: '',
    video: '',
    coach_id: '',
    fecha: '',
    inicio: '',
    fin: '',
    huecos: ''
  });


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  useEffect(() => {
    (async () => {
      let co = await getCoaches();
      setCoaches(co.map(coach => { return { id: coach.id, label: coach.nombre } }));
    })()
  }, [])

  useEffect(() => {
    if (row?.id)
      setActual({ ...row });
  }, [row])

  useEffect(() => { console.log(coaches) }, [coaches])



  function Guardar() {
    actual.coach_id = coaches.find(coach => coach.label === actual.coach).id;
    console.log(actual);
    if (funciones.create !== undefined) {
      funciones.create(actual);
    }

    if (funciones.update !== undefined) {
      funciones.update(actual.id, actual);
    }
    setOpenDialog(false);
  }

  return (
    <Dialog
      open={openDailog}
      onClose={handleClose}>
      <Box
        padding={2}
        display="flex"
        flexDirection="column"
      >
        <TextFieldContactar
          id={'nombre'}
          label={'Nombre'}
          value={row?.nombre}
          onChange={(e) => actual.nombre = e.target.value}
          type="text"
          width="90%"
        />

        <TextFieldContactar
          id={'descripcion'}
          label={'Descripción'}
          value={row?.descripcion}
          onChange={(e) => actual.descripcion = e.target.value}
          type="text"
          width="90%"
        />

        <TextFieldContactar
          id={'video'}
          label={'Video'}
          value={row?.video}
          onChange={(e) => actual.video = e.target.value}
          type="text"
          width="90%"
        />

        <TextFieldContactar
          id={'huecos'}
          label={'Huecos'}
          value={row?.huecos}
          onChange={(e) => actual.huecos = e.target.value}
          type="number"
          width="90%"
        />

        <DateCustom
          value={row?.fecha}
          id={'fecha'}
          onChange={(e) => actual.fecha = e.format('YYYY-MM-DD')}
        />
        <TimeCustom
          value={row?.inicio}
          id={'inicio'}
          label={'Inicio'}
          onChange={(e) => actual.inicio = e.format("HH:mm")}
        />

        <TimeCustom
          value={row?.fin}
          id={'fin'}
          label={'Fin'}
          onChange={(e) => actual.fin = e.format("HH:mm")} />
        <Autocomplete
          disablePortal
          id="coach"
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={coaches}
          value={actual.coach === undefined ? null : actual.coach}
          onChange={(e, value) => actual.coach = value.label}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Coach" />}
        />
      </Box>
      <Box
        padding={2}
        display={"flex"}
        justifyContent={"space-around"}>
        <BotonCustom onClick={Guardar} label="Guardar" />
        {funciones.update !== undefined ? <BotonCustom onClick={() => {deleter(row.id); setOpenDialog(false);}} label="Eliminar" /> : null}
        <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
      </Box>
    </Dialog>
  );
};

export default CategoriaDialog;