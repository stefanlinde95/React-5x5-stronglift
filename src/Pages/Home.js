import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Workout from '../workout';

const Home = () => {
    return (
        <div className="container mx-auto border-solid rounded w-full lg:w-5/12">
        <Workout />
        </div>
    )
}

export default Home;