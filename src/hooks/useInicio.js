
import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPaginas(filter:{nombre : { eq: "Inicio" }}){
                nodes {
                    id
                    nombre
                    contenido
                    imagen {
                        publicURL
                    }
                }
            }
        }
    `);

    console.log(resultado);
}

export default useInicio;