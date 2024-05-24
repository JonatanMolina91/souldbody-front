import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const TimeCustom = ({value, id, onChange, label}) => {



    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                defaultValue={dayjs(value, 'HH:mm') || null}
                sx={{marginTop: 2}}
                label={label}
                name={id}
                id={id}
                onChange={onChange}
                ampm={false}
            />
        </LocalizationProvider>
    );
};

export default TimeCustom;