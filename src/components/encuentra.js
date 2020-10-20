import React from 'react';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css'

const ImageBackground = styled(BackgroundImage)`
height:300px;
`

const Encuentra = () => {
    const { imagen } = useStaticQuery(graphql`
    query {
        imagen: file(relativePath: { eq: "encuentra.jpg"}) {
            sharp: childImageSharp {
                fluid( maxWidth: 1500 ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`)
    //console.log(imagen.sharp.fluid)
    return (
        <ImageBackground
            tag="section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCSS.imagenbg}>
                <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImageBackground>
    );
}
export default Encuentra;