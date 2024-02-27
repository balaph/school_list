import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { AppContext } from './context';

function Detail() {
    const {schoolDbn} = useParams();
    const {schools} = useContext(AppContext);
    const school = schools.find(item => String(item.dbn) == schoolDbn) || {};
    
    return <>
        <h1>{school.school_name}</h1>
        <p>{school.overview_paragraph}</p>
    </>;
}

export default Detail;