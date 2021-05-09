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

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        description: propiedad.description,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        estacienamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categorio:propiedad.categoria
    }))
}

export default usePropiedades;