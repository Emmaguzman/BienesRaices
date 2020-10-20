import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled';

import useInicio from '../hooks/useInicio';
import BackgroundImage from 'gatsby-background-image';

import heroCSS from '../css/hero.module.css'

import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'

const BackgroundImagen=styled(BackgroundImage)`
    height:600px;    
`
const Container = styled.div`
    max-width:800px;
    margin:0 auto;
`
const Contenido=styled.p`
    text-align:center;
`


function Index() {
    const inicio = useInicio();    
   const { nombre, contenido, imagen } = inicio[0];
    return (

        <Layout>
           <BackgroundImagen 
                tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo} >
                        Venta de caasas y departamentos exclusivos
                    </h1>
                </div>
            </BackgroundImagen>
            <main>
                <Container>
                    <h1>{nombre}</h1>
                    <Contenido>{contenido}</Contenido>
                </Container>
            </main>
            
            <Encuentra/>
            <ListadoPropiedades/>
        </Layout>
    );

}

export default Index

