import './App.css';
import React from 'react';
import Payment from './payment/Payment';
import PlanList from './plan/PlanList'

function App() {
  const menu = false;
  return (
    <div className="app">
      <PlanList />
      <Payment />
    </div>
  );
}

export default App;
