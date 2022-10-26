import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout =(props) =>{
    return(
        <div className="container">
            <div>
                <Navbar/>  
                <main>{props.children}</main>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;