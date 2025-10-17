import React from 'react'
import Footer from '../../component/Footer'
import Header from '../components/FreelanceDashboardHeader'
import logo from '/logo22.jpg'
import { MdOutlinePending } from "react-icons/md";
import { TbUrgent } from "react-icons/tb";
import { TbComet } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { SiStagetimer } from "react-icons/si";
import { MdDone } from "react-icons/md";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";




const AdminDashboard = () => {
  return (
    <div className='bg-neutral-950'>
      <div  className="w-full bg-red-900 rounded-b-4xl h-80 flex items-end px-9 py-5">
        <Header
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Hire', href: '/Hire-me' },
            { label: 'Dashboard', href: '/Dashboard' },
            { label: 'Contact', href: '/Contact' },
            { label: 'Login', href: '/Login' },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#FFFBEB"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#4C0101"
        />
        <h1 style={{fontFamily:"Chillax"}} className="text-8xl font-light text-amber-50">
          Dashboard
        </h1>
      </div>

      <div className='h-auto bg-neutral-950  px-10 py-12'>

        <div className='grid grid-cols-2'>
          <div  className=' me-5 h-auto px-10 bg-neutral-800 font-extralight text-white rounded-xl py-5'>
            <h1 style={{fontFamily:"Chillax"}} className='text-7xl text-neutral-300 py-5 font-light '>Overview</h1>
            <div  className='grid grid-cols-2 gap-5'>
              
              <div  className='px-4  bg-yellow-500 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1  className=''>Pending Requests</h1>
                  <MdOutlinePending className='mt-1' />
                </div>
                <h3 className='text-6xl font-light pb-3'>10</h3>
              </div>

              <div className='px-4 bg-red-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Urgent Requests</h1>
                  <TbUrgent className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>8</h3>
              </div>
              
              <div className='px-4 bg-blue-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Visits</h1>
                  <TbComet className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>130</h3>
              </div>

              <div className='px-4 bg-green-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Total Earnings</h1>
                  <TbMoneybag className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>$2300</h3>
              </div>

              <div className='px-4 bg-indigo-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Active Users</h1>
                  <TbComet className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>200</h3>
              </div>

              <div className='px-4 bg-emerald-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Pending Invoices</h1>
                  <TbMoneybag className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>23</h3>
              </div>

              <div></div>
            </div>
          </div>
          <div className=' me-5 h-auto px-10 bg-neutral-800 font-extralight text-white rounded-xl py-5'>
            <h1 style={{fontFamily:"Chillax"}} className='text-7xl py-5 font-light text-neutral-300   '>Projects</h1>
            <div className='grid grid-cols-2 gap-5'>
              
              <div className='px-4  bg-neutral-900 rounded-xl'>
                <h3 className='text-6xl text-white font-light pt-11'>10</h3>
              </div>

              <div className='px-4 bg-orange-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Response </h1>
                  <AiFillApi className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>Off</h3>
              </div>
              
              <div className='px-4 bg-purple-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className='text-white'>Ongoing Projects</h1>
                  <TbComet className='mt-1' />
                </div>
                <h3 className='text-6xl text-white pb-3'>13</h3>
              </div>

              <div className='px-4 bg-teal-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Response Time</h1>
                  <SiStagetimer className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>2h 30m</h3>
              </div>
              <div className='px-4 bg-cyan-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className='text-white'>Completed Members</h1>
                  <MdDone className='mt-1' />
                </div>
                <h3 className='text-6xl text-white pb-3'>50</h3>
              </div>

              <div className='px-4 bg-emerald-600 rounded-xl'>
                <div className='flex justify-between text-xl py-2'>
                  <h1 className=''>Client Satisfaction</h1>
                  <MdOutlineSentimentVerySatisfied className='mt-1' />
                </div>
                <h3 className='text-6xl pb-3'>76%</h3>
              </div>

              <div></div>
            </div>
          </div>
          
        </div>
      </div>
<Footer />
    </div>
  )
}

export default AdminDashboard