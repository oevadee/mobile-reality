import React from 'react'

import Home from './routes/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Route component={Home} path="/" exact />
      </Router>
  )
}

export default App
