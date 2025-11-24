import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './users/pages/Home'
import Contact from './users/pages/Contact'
import Dashboard from './users/pages/Dashboard'
import HireMe from './users/pages/HireMe'
import Portfolio from './users/pages/Portfolio'
import Profile from './users/pages/Profile'
import Auth from './pages/Auth'
import AdminDashboard from './admin/pages/AdminDashboard'
import ClientAdmin from './admin/pages/ClientsAdmin'
import ProjectAdmin from './admin/pages/ProjectAdmin'
import SettingsAdmin from './admin/pages/SettingsAdmin'
import Pnf from './pages/Pnf'
import AddJob from './users/pages/AddJob'
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentFailed from './users/pages/PaymentFailed'
import HireModal from './users/pages/HireModal'
import { AnimatePresence } from 'framer-motion'



const App = () => {
  const location = useLocation(); // This is crucial!
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/register' element={<Auth register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/hire-me' element={<HireMe />} />
          <Route path='/jobs/:id/view' element={<Portfolio />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add-job' element={<AddJob />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/payment-failed' element={<PaymentFailed />} />
          <Route path='/hire-modal' element={<HireModal />} />
        
          {/* Admin Routes */}
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/admin-clients' element={<ClientAdmin />} />
          <Route path='/admin-projects' element={<ProjectAdmin />} />
          <Route path='/admin-settings' element={<SettingsAdmin />} />
          {/* 404 */}
          <Route path='/*' element={<Pnf />} />
        </Routes>
      </AnimatePresence>
      
    </>
  )
}

export default App