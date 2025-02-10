import React from 'react';
import { LayoutDashboard, Users, ShoppingCart, Settings, BarChart2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <LayoutDashboard className="sidebar__header-icon" />
        <span className="sidebar__header-title">Analytics Pro</span>
      </div>
      
      <nav className="sidebar__nav">
        <a href="#" className="sidebar__nav-item sidebar__nav-item--active">
          <BarChart2 className="sidebar__nav-item-icon" />
          Dashboard
        </a>
        <a href="#" className="sidebar__nav-item">
          <Users className="sidebar__nav-item-icon" />
          Users
        </a>
        <a href="#" className="sidebar__nav-item">
          <ShoppingCart className="sidebar__nav-item-icon" />
          Sales
        </a>
        <a href="#" className="sidebar__nav-item">
          <Settings className="sidebar__nav-item-icon" />
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;