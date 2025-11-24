import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import { UserRound, Ratio, SquareChartGantt, House, Wrench, Power } from 'lucide-react';
import Dock from "../components/FreelanceDashboardHeader";
import { gsap } from 'gsap';
import { getAllUsersAPI } from '../../services/allAPI';
import PageTransition from '../../users/components/PageTransition';

const ClientAdmin = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const [users, setUsers] = useState([])

  console.log(users);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      getAllUsers(token)
    }
  }, [])

  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setUsers(result.data)
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);

    }
  }

  const [token, setToken] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
     
    }
  }, [token])

  const logout = () => {
    sessionStorage.clear()
    setToken("")
    navigate("/")
  }

  const items = [
    { icon: <House size={18} color='#A3A3A3' />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18} color="#0EA5E9" />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <SquareChartGantt size={18} color='#A3A3A3' />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color='#A3A3A3' />, label: 'Settings', onClick: () => navigate('/admin-settings') },
    { icon: <Power size={18} color='red' />, label: 'Logout', onClick: logout },
  ];


  useEffect(() => {
    if (cardsRef.current) {
      const cards = gsap.utils.toArray('.client-card');
      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.1 }
        );
      }
    }
  }, [users]);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.02, duration: 0.2, ease: "power1.out" });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power1.out" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white px-8">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
        {/* Header */}
        <div
          ref={headerRef}
          className="ms-3 mt-5 mb-8"
        >
          <h2 className="text-6xl font-extralight tracking-tight text-neutral-200 mb-2">
            Manage Users
          </h2>
          <hr className="mt-5 text-neutral-800" />
        </div>
        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={cardsRef}>
          {
            users.length > 0 ?
              users.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl p-5 border border-white/10 hover:bg-gradient-to-br from-700/10 to-emerald-300/5 backdrop-blur-sm client-card"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative z-10">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="text-3xl text-white font-light tracking-tight">{item?.username}</div>
                        <div className="flex items-center gap-2 text-sm text-emerald-400/80">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {item?.email}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                        <div className="text-xs uppercase tracking-widest text-white/40 font-medium">
                          Member since
                        </div>
                        <div className="text-xs text-white/60 font-mono">
                          {item?.createdAt ? new Date(item.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          }) : ""}
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Minimal Glow */}
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                </div>
              ))
              :
              <p>No Users</p>
          }
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ClientAdmin;