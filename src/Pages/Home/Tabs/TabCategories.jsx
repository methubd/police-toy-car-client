import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Truck from './Categories/Truck';
import Suv from './Categories/Suv';
import Ambulance from './Categories/Ambulance';

const TabCategories = () => {

    const [trucks, setTrucks] = useState([])
    const [suv, setSuv] = useState([])
    const [ambulance, setAmbulance] = useState([])
    
    

    //Trucks Data Loaded
    useEffect(() => {
        fetch('http://localhost:5000/truck')
        .then(res => res.json())
        .then(data => {
            setTrucks(data.slice(0, 2));
        })
    }, [])

    //SUV Data Loaded
    useEffect(() => {
        fetch('http://localhost:5000/suv')
        .then(res => res.json())
        .then(data => {
            setSuv(data.slice(0, 2));
        })
    }, [])

    //Ambulance Data Loaded

    useEffect(() => {
        fetch('http://localhost:5000/ambulance')
        .then(res => res.json())
        .then(data => {
            setAmbulance(data.slice(0, 2));
        })
    }, [])


    return (
        <div className='mt-20'>
            <h1 className='text-center text-2xl font-semibold'>See Products by Category</h1>
                <div className='w-2/3 mx-auto text-center py-10'>
                <Tabs>
                    <TabList>
                        <Tab>Truck</Tab>
                        <Tab>SUV</Tab>
                        <Tab>Ambulance</Tab>
                    </TabList>

                    <TabPanel>                    
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10'>
                            {
                                trucks.map(truck => <Truck
                                key={truck._id}
                                truck={truck}
                                ></Truck>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10'>
                            {
                                suv.map(suv => <Suv
                                    key={suv._id}
                                    suv={suv}
                                ></Suv>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10'>
                            {
                                ambulance.map(amb => <Ambulance
                                    key={amb._id}
                                    amb={amb}
                                ></Ambulance>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>            
            </div>
        </div>
    );
};

export default TabCategories;