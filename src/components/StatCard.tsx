import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  Icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, Icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <div className="stat-card__content">
          <p className="stat-card__content-title">{title}</p>
          <h3 className="stat-card__content-value">{value}</h3>
        </div>
        <div className="stat-card__icon">
          <Icon />
        </div>
      </div>
      <div className="stat-card__footer">
        <span className={`stat-card__footer-change stat-card__footer-change--${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
        <span className="stat-card__footer-text">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;