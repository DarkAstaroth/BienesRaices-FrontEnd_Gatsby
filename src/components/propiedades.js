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
                estacionamiento
            }
        }
    }
`;

const Propiedad = ({data}) => {

    return (
        <Layout>

        </Layout>
     );
}
 
export default Propiedad;