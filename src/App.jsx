import React from 'react'
import { Route , Routes  } from 'react-router-dom'
import Home from './users/pages/Home'
import Contact from './users/pages/Contact'
import Dashboard from './users/pages/Dashboard'
import HireMe from './users/pages/HireMe'
import Portfolio from './users/pages/Portfolio'
import Profile from './users/pages/Profile'
import Auth from './pages/Auth'
import AdminDashboard from './admin/pages/AdminDashboard'
import ClientAdmin from './admin/pages/ClientsAdmin'
import PortfolioAdmin from './admin/pages/PortfolioAdmin'
import ProjectAdmin from './admin/pages/ProjectAdmin'
import SettingsAdmin from './admin/pages/SettingsAdmin'
import Pnf from './pages/Pnf'


const App = () => {
  return (
    <>
    <Routes>
     {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/hire-me' element={<HireMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />

        {/* Admin Routes */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/admin-clients' element={<ClientAdmin />} />
        <Route path='/admin-portfolio' element={<PortfolioAdmin />} />
        <Route path='/admin-projects' element={<ProjectAdmin />} />
        <Route path='/admin-settings' element={<SettingsAdmin />} />

        {/* 404 */}
        <Route path='/*' element={<Pnf />} />
    </Routes>
    </>
  )
}

export default App