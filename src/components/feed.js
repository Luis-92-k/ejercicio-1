import React from 'react';
import Profile from './profile/profile';
import Interest from './interest/interest';
import Learn from './learn/learn';
import Expectations from './expectations/expectations';
import Vacio from './vacio/vacio';


export default function Feed(){
    return(
        <div>
            <Profile />
            <Interest />
            <Learn />
            <Expectations />
            <Vacio />
        </div>
    )
}