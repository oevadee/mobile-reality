import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setHouses } from './state/actions/housesActions';
import { Home, HousesAdder, HouseDetails, Houses } from './routes';

function App() {
  const dispatch = useDispatch();
  const { data } = useQuery(
    'houses',
    async () =>
      await axios.get(
        'http://mobile-reality-backend.sadek.usermd.net/houses/all'
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (data) {
    dispatch(setHouses(data?.data.results));
  }
  return (
    <Router>
      <Route component={Home} path='/' exact />
      <Route path='/house-adder' component={HousesAdder} />
      <Route exact path='/houses/:id' component={HouseDetails} />
      <Route exact path='/houses' component={Houses} />
    </Router>
  );
}

export default App;
