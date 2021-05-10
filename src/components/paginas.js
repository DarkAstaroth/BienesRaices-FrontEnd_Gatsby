import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

const ContenidoPagina = styled.div`
    max-width:1200;
    margin: 0 auto;
    width:95%;

    @media(min-width:768px){
        display:flex;
        grid-template-columns: 2fr,1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`

`;

const Paginas = ({ data: { allStrapiPropiedades: { nodes } } }) => {

    return (
        <Layout>
            <main className="contenedor">
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    <Img fluid={imagen.sharp.fluid} />
                    <p>{description}</p>

                </ContenidoPagina>
            </main>
        </Layout>
    );
}

export default Paginas;