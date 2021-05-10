import React, { useState }from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useFiltro = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias{
                nodes{
                    nombre
                    id
                }
            }
        }
    `);

    const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => (
        <form>
            <select>
                <option value="">---Filtrar--</option>
                {
                    categorias.map(opcion => (
                        <option key={opcion.id} value={opcion.nombre}> {opcion.nombre}</option>
                    ))
                }
            </select>
        </form>
    );

    return {
        FiltroUI
    } 
}

export default useFiltro;