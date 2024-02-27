import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from './context';

function List() {
    
    const {schools} = useContext(AppContext);

    return <ul>
    {schools.map((school, i) => {
      return <li key={i}>
        <Link to={`/${school.dbn}`}>
          <span>{school.dbn}</span> <span>{school.school_name}</span>
        </Link>
        </li>
    })}
  </ul> ;
}

export default List;