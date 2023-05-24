import React from 'react';
import TabView from './Component/TabView';
import Footer from './Component/Footer/Footer';

const HomeLayout = ({children}) => {
    return (
        <>
            
            {children}
            <TabView/>
            <Footer/>
        </>
    );
};

export default HomeLayout;