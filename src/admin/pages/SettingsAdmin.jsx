import { useState, useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import { UserRound, Ratio, SquareChartGantt, House, Wrench } from 'lucide-react';
import Dock from "../components/FreelanceDashboardHeader";
import { toast, ToastContainer } from "react-toastify";
import { updateAdminProfileAPI } from "../../services/allAPI";
import { adminUpdateContext } from "../../Context-APi/ContextShare";
import SERVERURL from "../../services/serverURL";
import PageTransition from "../../users/components/PageTransition";

const SettingsAdmin = () => {

  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    profileImage: "",
    bio: "",
    role: ""
  }); const [existingProfilePic, setExistingProfilePic] = useState("")
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")
  const { adminEditResponse, setAdminEditResponse } = useContext(adminUpdateContext)
  const [dp, setDp] = useState("https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180")
  const [adminName, setAdminName] = useState("")
  const [adminbio, setAdminBio] = useState("")




  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, role: user.role })
      setExistingProfilePic(user.profileImage)
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.profile)
      setAdminName(user.username)
      setAdminBio(user.bio)
    }
  }, [adminEditResponse])


  const handlePictureUpload = (e) => {
    setAdminDetails({ ...adminDetails, profileImage: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setAdminDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, role: user.role })
    setExistingProfilePic(user.profileImage)
    setPreview("")

  }

  const handleUpdateAdminProfile = async () => {
    const { username, password, cpassword, profileImage, bio, role } = adminDetails
    if (!username || !password || !cpassword || !bio) {
      toast.info("please fill the form completely")
    } else {
      if (password !== cpassword) {
        toast.warning("incorrect password")
        handleReset()
      } else {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData()
        reqBody.append("username", username)
        reqBody.append("password", password)
        reqBody.append("bio", bio)
        preview ? reqBody.append("profileImage", profileImage) : reqBody.append("profileImage", existingProfilePic)
        try {
          const result = await updateAdminProfileAPI(reqBody, reqHeader)
          console.log(result);

          if (result.status == 200) {
            // toast.success("profile updation completed")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            handleReset()
            setAdminDetails(result.data)
            setModalOpen(false)
            navigate("/admin-settings")
          } else {
            console.log(result);
            toast.error("something went wrong")
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }


  const navigate = useNavigate();

  const items = [
    { icon: <House size={18} color='#A3A3A3' />, label: 'Dashboard', onClick: () => navigate('/admin-dashboard') },
    { icon: <UserRound size={18} color='#A3A3A3' />, label: 'Clients', onClick: () => navigate('/admin-clients') },
    { icon: <Ratio size={18} color='#A3A3A3' />, label: 'Portfolio', onClick: () => navigate('/admin-portfolio') },
    { icon: <SquareChartGantt size={18} color='#A3A3A3' />, label: 'Projects', onClick: () => navigate('/admin-projects') },
    { icon: <Wrench size={18} color="#991B1B" />, label: 'Settings', onClick: () => navigate('/admin-settings') },
  ];

  // Profile state
  const [profile, setProfile] = useState({
    username: "adminUser",
    password: "********",
    bio: "This is the admin bio.",
    profileImage: "logo22/jpg"
  });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Refs for animation
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const profileRef = useRef(null);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    }

    // Animate cards
    if (cardsRef.current && cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.1,
          stagger: 0.08,
          ease: "power2.out"
        }
      );
    }

    // Animate profile section
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (modalOpen) {
      // Show modal with fade and scale
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      // Hide modal with fade and scale
      if (overlayRef.current && modalRef.current) {
        gsap.to(modalRef.current, {
          opacity: 0,
          scale: 0.95,
          y: 20,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            if (overlayRef.current) {
              gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.25,
                ease: "power2.in"
              });
            }
          }
        });
      }
    }
  }, [modalOpen]);

  // Controlled form state for modal inputs
  const [formData, setFormData] = useState({
    username: profile.username,
    password: "",
    bio: profile.bio,
    profileImage: profile.profileImage
  });



  return (
    <PageTransition>
      <div className="h-screen bg-black text-white px-8 ">
      
        {/* Header */}
        <div
          ref={headerRef}
          className="ms-3 mt- mb-8"
        >
          <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
          <h2 className="text-6xl font-extralight tracking-tight text-neutral-200 mt-2 mb-3">
            Admin Settings
          </h2>
          <hr className="mt-7 text-neutral-800" />
        </div>
        {/* Settings Cards */}
        {/* Profile Section */}
        <section
          ref={profileRef}
          className="w-full mx-auto mb-16"
        >
          <div className="relative overflow-hidden  rounded-3xl bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border border-white/5 backdrop-blur-xl">
             {/* <div className="absolute  inset-0 w-full bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div> */}
            <div className="relative  p-12">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="relative group">
                  {/* <div className="absolute inset-0  bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div> */}
                  {
                    existingProfilePic ?
                      <img className='border border-slate-800 ' src={preview ? preview : `${SERVERURL}/uploads/${existingProfilePic}`} alt='user admin logo' style={{ width: '400px', height: '400px', borderRadius: '2%' }} />
                      :
                      <img className='border border-slate-400 ' src={preview ? preview : 'https://static.vecteezy.com/system/resources/previews/013/716/222/non_2x/coin-of-alexander-the-great-vintage-illustration-free-vector.jpg'} alt='user admin logo' style={{ width: '200px', height: '100px', borderRadius: '50%' }} />
                  }
                </div>
                <div className="flex-1 space-y-8">
                  <div className="space-y-1">
                    <h3 className="text-sm uppercase tracking-wider text-white/40 font-medium">Profile</h3>
                    <h2 className="text-4xl font-light text-white">{adminName}</h2>
                  </div>
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-widest text-white/30 font-medium">Credentials</div>
                      <div className="flex items-center gap-3 text-white/60 font-mono text-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-400/50"></div>
                        {profile.password}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-widest text-white/30 font-medium">Biography</div>
                      <p className="text-white/70 leading-relaxed">{adminbio}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end">
                <button
                  className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium overflow-hidden hover:border-emerald-400/50 transition-all duration-300"
                  onClick={() => {
                    setFormData({
                      username: profile.username,
                      password: "",
                      bio: profile.bio,
                      profileImage: profile.profileImage
                    });
                    setModalOpen(true);
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Edit Profile</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Modal Overlay */}
        {modalOpen &&
          (
            <div
              ref={overlayRef}
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setModalOpen(false)}
            >
              {/* Modal Content */}
              <div
                ref={modalRef}
                className="bg-black bg-opacity-90 rounded-2xl p-8 w-full max-w-lg mx-4 relative"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-2xl font-light text-white mb-6">Edit Profile</h3>
                <form className="space-y-6 text-white/90">
                  <div>
                    <label htmlFor="username" className="block mb-1 font-semibold">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={adminDetails.username || ""}
                      onChange={e => setAdminDetails({ ...adminDetails, username: e.target.value })}
                      className="w-full bg-white/5 rounded-md px-3 py-2 border border-white/20 focus:outline-none focus:border-emerald-400 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="Enter new password"
                      value={adminDetails.password || ""}
                      onChange={e => setAdminDetails({ ...adminDetails, password: e.target.value })}
                      className="w-full bg-white/5 rounded-md px-3 py-2 border border-white/20 focus:outline-none focus:border-emerald-400 transition"
                      autoComplete="new-password"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="Confirm new password"
                      value={adminDetails.cpassword || ""}
                      onChange={e => setAdminDetails({ ...adminDetails, cpassword: e.target.value })}
                      className="w-full bg-white/5 rounded-md px-3 py-2 border border-white/20 focus:outline-none focus:border-emerald-400 transition"
                      autoComplete="new-password"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="block mb-1 font-semibold">Bio</label>
                    <textarea
                      name="bio"
                      value={adminDetails.bio || ""}
                      onChange={e => setAdminDetails({ ...adminDetails, bio: e.target.value })}
                      className="w-full bg-white/5 rounded-md px-3 py-2 border border-white/20 focus:outline-none focus:border-emerald-400 transition resize-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="profileImage" className="block mb-1 font-semibold">Profile Image</label>
                    {
                      existingProfilePic ?
                        <img className='border border-slate-400 ' src={preview ? preview : `${SERVERURL}/uploads/${existingProfilePic}`} alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        :
                        <img className='border border-slate-400 ' src={preview ? preview : 'https://static.vecteezy.com/system/resources/previews/013/716/222/non_2x/coin-of-alexander-the-great-vintage-illustration-free-vector.jpg'} alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    }
                    <input
                      type="file"
                      id="profileImage"
                      name="profileImage"
                      accept="image/*"
                      onChange={e => handlePictureUpload(e)}
                      className="w-full text-white/80"
                    />
                  </div>
                  <div className="flex justify-end gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="px-5 py-2 rounded-xl border border-neutral-700 text-white/80 hover:text-white transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={handleUpdateAdminProfile}
                      className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={500}
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
      </div>
    </PageTransition>
  );
};

export default SettingsAdmin;