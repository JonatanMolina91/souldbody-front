import {  Card, CardHeader, CardMedia, Dialog, DialogTitle } from '@mui/material';
import React from 'react';
import getURL from '../../../../env';


const DialogCustom = ({openDailog, setOpenDailog, url }) => { 
  const baseURL = getURL();
  return (
    <Dialog
    open={openDailog}
    onClose={()=>setOpenDailog(false)}>
        <Card>
            <CardMedia
        component="img"
        height="194"
        image={baseURL+url}
        alt="Foto avatar"
      />
        </Card>
    </Dialog>
  );
};

export default DialogCustom;