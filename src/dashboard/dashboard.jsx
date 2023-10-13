import React from 'react';
import { FaUsers } from 'react-icons/fa';

import Siderbar from '../components/Sidebar'

const StaffCard = () => {
  return (
 
    <>
    <Siderbar/>
    <div className="staff-card">
      <div className="icons-dashboard">
        <FaUsers />
      </div>
      <div className="text-dashboard">
        <p className="text-label">Staf</p>
        <p className="text-count">23 orang</p>
      </div>
    </div>
    </>
  );
};

export default StaffCard;
