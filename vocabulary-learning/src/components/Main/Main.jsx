import PropTypes from 'prop-types';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Layouts/Header';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Main = props => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <header>
                {
                    user && user?.email ? <Header></Header> : ''
                }
                
            </header>
            <div ><Navbar></Navbar></div>
            <div className=' min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

Main.propTypes = {
    props: PropTypes
};

export default Main;