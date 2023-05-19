import React from 'react';
import Banner from '../Banner/Banner';
import TabCategories from '../Tabs/TabCategories';
import ForBoyGirls from '../ForBoyGirls/ForBoyGirls';
import Facilities from '../Facilities/Facilities';
import useTitle from '../../../Hooks/useTitle';


const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <TabCategories></TabCategories>
            <ForBoyGirls></ForBoyGirls>
        </div>
    );
};

export default Home;