import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = props => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-center items-center'>
            {
                user && user?.email ? <h2 className="text-2xl">Welcome {user.displayName}</h2> : ''
            }
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;