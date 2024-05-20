import { Outlet } from "react-router-dom";
import Cabecera from "../../componentes/cabecera/Cabecera";
import BarraMenu from "../../componentes/barraMenu/BarraMenu";
import Pie from "../../componentes/pie/Pie";
import React from "react";


export default function Invitado() {
    return (
        <React.Fragment>
            <Cabecera/>
            <BarraMenu/>
            <Outlet/>
            <Pie/>    
        </React.Fragment>
    )
}