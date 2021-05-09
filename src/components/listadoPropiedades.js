import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
        setPropiedades(resultado);
    }, []);

    return (
        <>
            <h2
                css={css`
                margin-top:5rem;
            `}
            >Nuestras Propiedades</h2>

            <ul>
                {propiedades.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={ propiedad}
                    />
                ))}
            </ul>
        </>
    );
}

export default ListadoPropiedades;