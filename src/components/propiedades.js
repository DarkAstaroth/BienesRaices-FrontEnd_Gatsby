import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

const Contenido = styled.div`
    max-width:1200;
    margin: 0 auto;
    width:95%;

    @media(min-width:768px){
        display:flex;
        grid-template-columns: 2fr,1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .precio {
        font-size:2rem;
        color:#75ab00;
    }
    .agente{
        margin-top:4rem;
        border-radius:2rem;
        background-color:#75ab00;
        padding:3rem;
        color:#fff;

        p{
            margin:0;
        }
    }
`;

export const query = graphql`
    query ($id : String!){
        allStrapiPropiedades(filter:{id:{eq:$id}}){
            nodes{
                nombre
                description
                wc
                estacionamiento
                habitaciones
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    sharp : childImageSharp {
                        fluid (maxWidth : 1200){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const Propiedad = ({ data: { allStrapiPropiedades: { nodes } } }) => {

    const { nombre, description, wc, estacionamiento, habitaciones, agentes, imagen, precio } = nodes[0];

    return (
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Img fluid={imagen.sharp.fluid} />
                    <p>{description}</p>
                </main>
                <Sidebar>
                    <p className="precio">$ {precio}</p>
                    <Iconos
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>tel: {agentes.telefono}</p>
                        <p>Email:{ agentes.email}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
    );
}

export default Propiedad;