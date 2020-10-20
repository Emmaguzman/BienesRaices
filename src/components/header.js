import React from 'react';
import { Link,useStaticQuery,graphql } from 'gatsby';
import Navegacion from './navegacion';
import styled from '@emotion/styled';


const Head = styled.header`
background-color: #0D283B;
padding: 1rem;
`
const Container=styled.div`
  max-width:120rem;
  margin: 0 auto;
  text-align:center;

  @media (min-width:768px){
    display:flex;
    align-items:center;
    justify-content:space-between
  }
`
const Header = () => {
  const{logo}=useStaticQuery(graphql`
  query {
    logo:file(relativePath: {eq: "logo.svg"}){
      publicURL
    }
  }
  `);
  //console.log(logo)

  return (
    <Head>
      <Container>
        <Link to={'/'}>
          <img src={logo.publicURL} alt="Logotipo"/>
            </Link>
        <Navegacion />
      </Container>
    </Head>
  );
}

export default Header;
