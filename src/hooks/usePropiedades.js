import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes{
                    nombre
                    description
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categoria{
                        nombre
                    }
                    agentes{
                        nombre
                        telefono
                        email
                    }
                    imagen{
                        sharp:childImageSharp{
                            fluid( maxWidth : 600 , maxHeight: 400){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    console.log(datos);
}

export default usePropiedades;