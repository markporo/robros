import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Main from './Main';
import ErrorPage from '../components/ErrorPage';
import Footer from '../components/Footer';
import CardDetails from '../components/CardDetails';
  class App extends Component {

  render() {
    return (
        <div className='App flex-column'>
        
          <h1 className="text-6xl font-fascinate text-primaryGrey mt-8 mb-3">Robros</h1>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:id" element={<CardDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
    )
  }  
}

export default App;
