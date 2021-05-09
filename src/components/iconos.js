import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Iconos = ({wc,estacionamiento,habitaciones}) => {

    const { iconos } = useStaticQuery(graphql`
        query {
            iconos : allFile(filter : { relativeDirectory:{eq:"iconos"}}){
                edges{
                    node{
                        id
                        publicURL
                    }
                }
            }
        }
    `);

    return (
        <ul>
            <li>{estacionamiento}</li>
        </ul>
    );
}
 
export default Iconos;