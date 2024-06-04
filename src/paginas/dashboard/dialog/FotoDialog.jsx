import {  Card, CardHeader, CardMedia, Dialog, DialogTitle } from '@mui/material';
import React from 'react';


const DialogCustom = ({openDailog, setOpenDailog, url }) => { 
  return (
    <Dialog
    open={openDailog}
    onClose={()=>setOpenDailog(false)}>
        <Card>
            <CardMedia
        component="img"
        height="194"
        image={"https://souldbody-337c4235c4cf.herokuapp.com/"+url}
        alt="Foto avatar"
      />
        </Card>
    </Dialog>
  );
};

export default DialogCustom;