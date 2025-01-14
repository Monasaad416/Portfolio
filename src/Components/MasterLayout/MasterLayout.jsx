import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <div>
      <div className="container-fluid" style={{ padding: 0, marginTop: 0 }}>
        <div className="row">
          <div className="col-md-2 px-0 mx-0">
            <Sidebar />
          </div>
          <div className="col-md-10 px-0 mx-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
