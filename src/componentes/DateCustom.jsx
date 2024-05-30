import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const DateCustom = ({value, id, onChange}) => {
    const currentDate = new Date();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
        defaultValue={value!==undefined && value !== null  ? dayjs(value) : dayjs()}
        format='DD/MM/YYYY'
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