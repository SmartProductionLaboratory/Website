import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import Home from './Home'
import Professor from './Professor'
import Works from './Works'
import Experience from './experience'
import MSstudent from './MSstudents'
import UGstudent from './UGstudent'
import LabCarousel from './LabCarousel'
import Footer from './footer'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    {/* <App />, */}
    <Home/>
    <Works/>
    <Professor/>
    <Experience/>
    <MSstudent/>
    <LabCarousel/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
