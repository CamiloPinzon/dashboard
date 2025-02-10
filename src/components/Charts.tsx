import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000, sales: 2400, visits: 2400 },
  { name: 'Feb', value: 3000, sales: 1398, visits: 2210 },
  { name: 'Mar', value: 2000, sales: 9800, visits: 2290 },
  { name: 'Apr', value: 2780, sales: 3908, visits: 2000 },
  { name: 'May', value: 1890, sales: 4800, visits: 2181 },
  { name: 'Jun', value: 2390, sales: 3800, visits: 2500 },
  { name: 'Jul', value: 3490, sales: 4300, visits: 2100 },
];

export const RevenueChart = () => (
  <div className="chart-container">
    <h2 className="chart-container__title">Revenue Overview</h2>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const SalesChart = () => (
  <div className="chart-container">
    <h2 className="chart-container__title">Sales Analytics</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const VisitsChart = () => (
  <div className="chart-container chart-container--full">
    <h2 className="chart-container__title">Website Visits</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="visits" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);