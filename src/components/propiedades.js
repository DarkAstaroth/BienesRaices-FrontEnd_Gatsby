import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

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
            <div>
                <main>
                    <Img fluid={imagen.sharp.fluid} />
                    <p>{description}</p>
                </main>
                <aside>
                    <p>$ {precio}</p>
                    <Iconos
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div>
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>tel: {agentes.telefono}</p>
                        <p>Email:{ agentes.email}</p>
                    </div>
                </aside>
            </div>
        </Layout>
    );
}

export default Propiedad;