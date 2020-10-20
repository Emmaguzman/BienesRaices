import React, { useState } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import styled from '@emotion/styled';

const Formulario = styled.form`
width:100%;
display:flex;
border:1px solid #e1e1e1;
margin:2rem auto 0 auto;
max-width:1200px;
`;

const Select = styled.select`
flex:1;
padding:1rem;
appearance: none;
border:none;
font-family:'Lato',sans-serif;
`;

const useFiltro = () => {
    const [categoria, setCategoria] = useState('');   

   //console.log(categoria)

    const resultado = useStaticQuery(graphql`
    query{
        allStrapiCategorias{
          nodes{
            Nombre
            id
          }
        }
      }
    `);

    const categorias = resultado.allStrapiCategorias.nodes;
  

    //console.log(categorias)
    const FiltroUI = () => (
        <Formulario
            onChange={e=>setCategoria(e.target.value)}
            value={categoria}
            >
                
            <Select>
                <option value="">--Fltrar---</option>
                {categorias.map(opcion => (
                    <option key={opcion.id} value={opcion.Nombre}>{opcion.Nombre}</option>
                ))}
            </Select>
        </Formulario>
    )
    return {categoria, FiltroUI }
}

export default useFiltro;