import { motion } from "framer-motion";
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import { UserRound, Ratio, SquareChartGantt, House, Wrench } from 'lucide-react';
import Dock from "../components/FreelanceDashboardHeader";
import { allJobsAdminAPI, updateJobStatusAPI } from "../../services/allAPI";
import { useEffect, useState } from "react";

const ManageProjectRequests = () => {
  
   const navigate = useNavigate();
   const [userJobs, setUserJobs] = useState([])
const [updateJobStatus, setUpdateJobStatus] = useState([])
console.log(userJobs);

  const items = [
    { icon: <House size={18} color='#A3A3A3' />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18} color='#A3A3A3' />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <Ratio size={18} color='#A3A3A3' />, label: 'Portfolio', onClick: () => navigate('/admin-portfolio') },
    { icon: <SquareChartGantt size={18} color="#EAB308" />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color='#A3A3A3' />, label: 'Settings', onClick: () => navigate('/admin-settings') },
  ];

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      GetAllJobs(token)
    }
  },[updateJobStatus])

  const GetAllJobs = async (userToken)=>{
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await allJobsAdminAPI(reqHeader)
      setUserJobs(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const approveJob = async (job)=>{
    const userToken = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await updateJobStatusAPI( {_id: job._id},reqHeader)
      setUpdateJobStatus(result.data)
    } catch (error) {
      console.log(error);
    }
  }

 

  return (
    <div className="min-h-screen bg-black text-white px-8 ">
        
     <Dock 
         items={items}
         panelHeight={68}
         baseItemSize={50}
         magnification={70}
       />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="ms-3 mt-5 mb-8"
      >
        <h2 className="text-6xl font-extralight tracking-tight text-neutral-200 mb-2">
          Manage Project Requests
        </h2>
        <hr className="mt-5 text-neutral-800" />
       
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {
        userJobs.length>0?
        userJobs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl p-6 border h-45 border-white/10 bg-white/2 backdrop-blur-md"
          >
            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex items-start justify-between  mb-3">
                <div>
                  <div className="text-sm text-white/70 font-medium">{item.username}</div>
                  <div className="text-lg text-white font-light">{item.jobTitle}</div>
                </div>
                <div className="text-xs text-white/50 text-right">
                  <div>{item.location}</div>
                  <div className="mt-2 text-white/60">{item.fees}</div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm text-white/60 mb-4 line-clamp-3">{item.specializations}</p>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {
                    item?.jobStatus== "pending" &&
                    <button onClick={()=>approveJob(item)} className="px-4 py-2 rounded text-sm font-medium hover:bg-emerald-500 hover:text-black text-emerald-400 border border-neutral-800 hover:brightness-105 transition">
                    Approve
                  </button>}
                  {
                     item?.jobStatus== "approved" &&
                    <button className="px-4 py-2 rounded text-sm font-medium border-neutral-800 border hover:text-white text-neutral-500 hover:bg-white/20 transition">
                    Approved
                  </button>}
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/5 rounded-full blur-2xl" />
          </motion.div>
        ))
      :
      <p>no jobs</p>
      }
      </div>
      <Footer/>
    </div>
  );
};

export default ManageProjectRequests;