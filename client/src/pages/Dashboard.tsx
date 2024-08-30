import React from 'react';
import TimerForm from '../components/Timer/TimerForm';
import TimerList from '../components/Timer/TimerList';
import './Pages.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <TimerForm />
      <TimerList />
    </div>
  )
};

export default Dashboard;
