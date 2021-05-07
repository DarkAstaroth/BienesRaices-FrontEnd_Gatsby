import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './navegacion';;

const Header = () => {
    return (
        <header>
            <div>
                <Link>
                    Bienes Raices
                </Link>

                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;