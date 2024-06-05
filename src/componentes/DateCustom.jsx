import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateCustom = ({value, id, onChange, width}) => {
    const currentDate = new Date();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
        defaultValue={value!==undefined && value !== null  ? dayjs(value) : null}
        format='DD/MM/YYYY'
        sx={{ width: width, marginTop: 2 }}
        id={id}
        name={id}
        label="Fecha"
        onChange={onChange}
        views={['year', 'month', 'day']}
         />
        </LocalizationProvider>
      );
};

export default DateCustom;