import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {toggleTheme}=use(AuthContext)
    return (
        <div onClick={toggleTheme}>
            <p>Header</p>
        </div>
    );
};

export default Header;