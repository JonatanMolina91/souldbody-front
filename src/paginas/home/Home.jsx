import React from 'react';
import Principal from './principal/Principal';
import Seccion from './seccion/Seccion';


const Home = () => {
    return (
       <React.Fragment>
        <Principal/>
        <Seccion/>
        </React.Fragment>
    );
};

export default Home;