import React from 'react'
import Header from '../components/Header'
import logo from '/logo22.jpg'
import Footer from '../../component/Footer'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useState } from 'react'
import { useContext } from 'react'
import { searchJobContext } from '../../Context-APi/ContextShare'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { getAllJobsAPI } from '../../services/allAPI'
import { Equal } from 'lucide-react'
import SERVERURL from '../../services/serverURL'
import PageTransition from '../components/PageTransition'

function HireMe() {

  const [token, setToken] = useState("")
  const [jobs, setJobs] = useState([])
  const { searchKey, setSearchKey } = useContext(searchJobContext)

  console.log(jobs);

 
useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)

      const user = JSON.parse(sessionStorage.getItem("user"))

     
    }
  }, [token])


   const logout = () => {
    sessionStorage.clear()
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate("/")
  }




// Base items (always visible)
  const baseItems = [
    { label: 'Home', href: '/' , navigate:"/"},
    { label: 'Hire', href: '/Hire-me', navigate:"Hire-me" },
    { label: 'Dashboard', href: '/Dashboard' },
    { label: 'Contact', href: '/Contact' },
  ];

  // Add login only if no token
  const items = token
    ? [
      ...baseItems,
      { label: 'Profile', href: '/profile' },
      { label: 'Logout', onClick: logout }   // 👈 ADD THIS
    ]
    : [
      ...baseItems,
      { label: 'Login', href: '/Login' }
    ];


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllJobs(userToken)
    }
  }, [searchKey])

  const getAllJobs = async (userToken) => {
    console.log(userToken);

    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllJobsAPI(searchKey, reqHeader)
      if (result.status == 200) {
        setJobs(result.data)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <PageTransition>
      <div className="bg-black mb-5 ">
        {/* Try: 'glass', 'liquid', 'architect', 'luminous', 'island' */}
        <Header variant="glass" items={items} />
      </div>
      {token ?
        <div className='w-full  md:px-10 px-5  bg-neutral-950 h-auto'>
          {/* Page Title */}
          <h1 h1 className='text-7xl md:text-9xl pt-20 text-neutral-500 font-semibold text-center'>For You</h1>
          {/* Centered Search Bar */}
          <motion.div
            className="w-full flex justify-center mt-10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <input
              value={searchKey}
              onChange={e => setSearchKey(e.target.value)}
              type="text"
              placeholder="Search by Job Title or Skill..."
              className="w-3/4 md:w-1/2 bg-neutral-900 text-neutral-300 placeholder-neutral-500 border border-neutral-700 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-red-700 transition-all duration-300"
            />
          </motion.div>

          {/* Main Content: Filter + Job Listings */}
          <div className="flex flex-col md:flex-row gap-10 w-full">


            {/* Job Listings */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-12">
              {/* Example Job Card */}
              {
                jobs.length > 0 ?
                  jobs.map(job => (
                    <motion.div
                      key={job?._id}
                      className="relative border md:w-300 w-87 border-neutral-800 rounded-xl p-4 sm:p-10 bg-neutral-900/30 text-white max-w-3xl md:mx-auto backdrop-blur-sm transition-all duration-500 hover:bg-neutral-900/80 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} hidden={job?.jobStatus == "pending" || job?.jobStatus == "sold"}>
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={`${SERVERURL}/uploads/${job.profilePhoto[0]}`}
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover border border-neutral-700"
                          />
                          <div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">{job?.username}</h2>
                            <p className="text-neutral-400 text-sm sm:text-base">{job?.jobTitle}</p>
                          </div>
                        </div>
                        <Link to={`/jobs/${job?._id}/view`}>
                          <button className="px-6 py-2 rounded-full border border-red-700 text-red-500 hover:bg-red-800 hover:text-white transition-all duration-300">
                            View Profile
                          </button>
                        </Link>
                      </div>
                      <div className="border-t border-neutral-800 pt-6">
                        <div className="flex flex-wrap items-center justify-between gap-6">


                          {/* specializations */}

                          <div>
                            <h3 className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Specializations</h3>
                            <div className="flex flex-col gap-3">
                              {/* Category title
                              {job?.technicalSkills?.category && (
                                <h4 className="text-neutral-400 text-sm uppercase tracking-wide mb-1">
                                  {job.technicalSkills.category}
                                </h4>
                              )} */}

                              {/* Skills list */}
                              <div className="flex flex-wrap gap-2">
                                {job?.specializations?.length > 0 ? (
                                  job.specializations
                                    .flatMap((item) =>
                                      typeof item === "string" ? item.split(",").map((s) => s.trim()) : [item]
                                    )
                                    .map((skill, i) => (
                                      <span
                                        key={i}
                                        className="bg-neutral-800/70 px-3 py-1 rounded-md text-neutral-300 text-sm hover:bg-red-800/40 transition-all duration-300"
                                      >
                                        {skill}
                                      </span>
                                    ))
                                ) : (
                                  <span className="text-neutral-500 text-sm">No skills added</span>
                                )}
                              </div>
                            </div>
                          </div>


                          <div className="flex flex-col sm:flex-row gap-8 text-sm sm:text-base text-neutral-300">
                            <div>
                              <h4 className="text-neutral-500 text-xs uppercase">Fees</h4>
                              <p className="text-orange-600">{job?.fees}</p>
                            </div>
                            <div>
                              <h4 className="text-neutral-500 text-xs uppercase">Available</h4>
                              <p>{job?.availability}</p>
                            </div>
                            <div>
                              <h4 className="text-neutral-500 text-xs uppercase">Location</h4>
                              <p>{job?.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))

                  :
                  <p className='text-white'>no jobs</p>
              }
            </div>
          </div>

        </div >
        :
        <p>please login </p>
      }
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      // transition={Slide}
      />
    </PageTransition>
  )
}

export default HireMe