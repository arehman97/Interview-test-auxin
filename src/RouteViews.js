
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Login from './container/Login';
import ProtectedRoutes from './ProtectedRoutes';

export const RouteViews = (props) =>
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path='/dashboard' element={<ProtectedRoutes/>}>
                <Route exact path='/dashboard' element={<Dashboard/>}/>
            </Route>
        </Routes>
    </div>

export default RouteViews;