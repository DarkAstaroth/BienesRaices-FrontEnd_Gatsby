import React, { useState }from 'react';

const useFiltro = () => {
    
    const FiltroUI = () => (
        <form>
            <select>
                <option value="">---Filtrar--</option>
            </select>
        </form>
    );

    return {
        FiltroUI
    } 
}

export default useFiltro;