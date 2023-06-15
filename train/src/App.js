import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainDetails';

const App = () => {
  return (


    <BrowserRouter>

      <Routes>
            <Route exact path="/" component={<TrainList />} />
           <Route exact path="/trains/:trainId" component={<TrainDetails />} />
      </Routes>
    </BrowserRouter>






  );
};

export default App;
