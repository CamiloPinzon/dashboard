import React from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import { RevenueChart, SalesChart, VisitsChart } from './components/Charts';
import { Users, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      
      <main className="dashboard__main">
        <div className="dashboard__header">
          <h1 className="dashboard__header-title">Dashboard Overview</h1>
          <p className="dashboard__header-subtitle">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="dashboard__stats">
          <StatCard
            title="Total Revenue"
            value="$54,375"
            change="12%"
            isPositive={true}
            Icon={DollarSign}
          />
          <StatCard
            title="Total Sales"
            value="1,245"
            change="8%"
            isPositive={true}
            Icon={ShoppingBag}
          />
          <StatCard
            title="Active Users"
            value="8,732"
            change="5%"
            isPositive={true}
            Icon={Users}
          />
          <StatCard
            title="Conversion Rate"
            value="2.4%"
            change="1%"
            isPositive={false}
            Icon={TrendingUp}
          />
        </div>

        <div className="charts-grid">
          <RevenueChart />
          <SalesChart />
          <VisitsChart />
        </div>
      </main>
    </div>
  );
}

export default App;