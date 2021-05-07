import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './navegacion';
import { css } from '@emotion/react';

const Header = () => {
    return (
        <header
            css={css`
                background-color:#0d283b;
                padding:1rem;

            `}
        >
            <div
                css={css`
                    max-width:120rem;
                    margin:0 auto;
                    text-align:center;

                    @media(min-width:768px){
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                    }
                `}
            >
                <Link>
                    Bienes Raices
                </Link>

                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;