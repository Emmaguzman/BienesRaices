import React, { useEffect, useState } from 'react';

import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css'

import usePropiedades from '../hooks/usePropiedades';
import useFiltro from '../hooks/useFilter';

import PropiedadPreview from './propiedadPrevew';

import styled from '@emotion/styled';

const Titulo = styled.h2`
    margin-top:5rem;
`;


const ListadoPropiedades = () => {
    const resultado = usePropiedades();

    const [propiedades] = useState(resultado);
    const [filtradas, setFiltradas] = useState([])
    //filtrado de propiedades

    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        if (categoria) {
            const filtro = propiedades.filter(propiedad => propiedad.categorias.Nombre === categoria);
            setFiltradas(filtro);
        } else {
            setFiltradas(propiedades)
        }

    }, [categoria,propiedades])

    return (
        <>
            <Titulo>Nuestras Propiedades</Titulo>

            {FiltroUI()}


            <ul className={listadoPropiedadesCSS.propiedades}>
                {filtradas.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    );

}

export default ListadoPropiedades;