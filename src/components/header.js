import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navegacion from './navegacion';
import { css } from '@emotion/react';

const Header = () => {

    // consultar el logo.svg

    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath:{eq:"logo.png"}){
                publicURL
            }
        }
    `);

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
                <Link
                    to='/'
                >
                    <img src={ logo.publicURL } alt="" width="75"/>
                </Link>

                <Navegacion />
            </div>
        </header>
    );
}

export default Header;