import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Secret from './Secret';

function Dashboard() {
  return <div>
      <Routes>
          <Route path = '/secret' element={<Secret />}/>
      </Routes>
  </div>;
}

export default Dashboard;
