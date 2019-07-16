import React from 'react';
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Specializations from './Components/Specializations/Specializations';
import Reference from './Components/Reference/Reference';
import './App.scss';


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab);


import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

library.add(faBars);










class App extends React.Component {
  render () {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Specializations/>
      <Reference/>
    </div>
  );
}
}

export default App;
