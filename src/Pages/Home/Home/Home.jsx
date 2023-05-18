import React from 'react';
import Banner from '../Banner/Banner';
import Toys from '../Products/Toys';
import TabCategories from '../Tabs/TabCategories';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TabCategories></TabCategories>
            <Toys></Toys>
        </div>
    );
};

export default Home;