import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
    return (
        <Box 
        height={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
        <CircularProgress color='success' size={"300px"} />
      </Box>
    );
};

export default Loading;