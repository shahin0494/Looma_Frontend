// src/pages/Auth.jsx
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa'
import logo from '/logo22.jpg'
import { googleLoginAPI,registerAPI, loginAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import { jwtDecode } from "jwt-decode";
import gsap from "gsap";
import ColorBends from '../reactbits/ColourBlends'

function Auth({ register = false }) {
  // const [isLogin, setIsLogin] = useState(!register)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '', role: '' })
  const navigate = useNavigate()

  // GSAP refs
  const logoRef = useRef(null);
  const formContainerRef = useRef(null);
  const inputRefs = useRef([]);
  inputRefs.current = [];

  // Helper to add refs for inputs
  const addToInputRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.85, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power3.out", delay: 0.2 }
      );
    }
    // Animate form container
    if (formContainerRef.current) {
      gsap.fromTo(
        formContainerRef.current,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out", delay: 0.4 }
      );
    }
    // Animate each input
    if (inputRefs.current.length > 0) {
      gsap.fromTo(
        inputRefs.current,
        { opacity: 0, y: 24, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.6,
        }
      );
    }
  }, [register]);

  const handleRegister = async () => {
    // e.preventDefault(); // prevent default form submit

    const { username, email, password, role, confirmPassword } = formData
    if (!username || !email || !password || !confirmPassword || !role) {
      toast.info("please fill the form completely")
      return
    }
    if (password !== confirmPassword) {
      toast.warning("passwords doesnot match")
      return
    }
    try {
      const result = await registerAPI(formData)
      console.log(result);
      if (result.status == 200) {
        alert("registration successfull please proceed to login")
        setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "" })
        navigate("/login")
      } else if (result.status == 409) {
        alert(result.response.data)
        setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "" })
        navigate("/login")
      } else {
        alert("something went wrong")
        //setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "" })
      }

    } catch (err) {
      console.log(err);

    }
  }

  const handleLogin = async () => {
    // e.preventDefault(); // prevent default form submit

    const { email, password } = formData
    if (!email || !password) {
      alert("please fill the form")
      return
    }
    try {
      const result = await loginAPI(formData)
      console.log(result);

      if (result.status == 200) {
       toast.success("Login Successfull")
        sessionStorage.setItem("user", JSON.stringify(result.data.user))
        sessionStorage.setItem("token", result.data.token)

        setTimeout(() => {

          if (result.data.user.role === "admin") {
            navigate("/admin-dashboard")
          }else if (result.data.user.role === "freelancer") {
            navigate("/")
          } else if (result.data.user.role === "user") {
            navigate("/")
          } else {
            navigate("/")
          }
        }, 1500);
      } else if (result.status === 401 || result.status === 404) {
        alert(result.response.data);
        setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "" });
      } else {
        alert("Something went wrong 😭");
        setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "" });
      }
    } catch (err) {
      console.log(err);

    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    const credential = credentialResponse.credential
    const details = jwtDecode(credential)
    console.log(details);
    try{
      const result = await googleLoginAPI({
      username: details.name,
      email: details.email,
      password: "googlepswd",
      profile: details.picture
    })
    console.log(result);
    if (result.status == 200) {
      toast.success("Login Successfull")
      sessionStorage.setItem("user", JSON.stringify(result.data.user))
      sessionStorage.setItem("token", result.data.token)
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate("/admin-dashboard")
        } else {
          navigate("/")
        }
      }, 2500);
    } else {
      toast.error("something went wrong")
    }
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
      {/* Animated ColorBends as full-page fixed background */}
      {/* Animated ColorBends as full-page fixed background (black & white) */}

      {/* Overlay and content */}
      <div style={{ height: "110vh" }} className="min-h-screen bg-neutral bg-neutral-950 overflow-hidden relative">
        <ColorBends
          // two-tone black & white blend
          colors={[
            "#FF0000", // Red
            "#FF7F00", // Orange
            "#FFFF00", // Yellow
            "#00FF00", // Green
            "#00FFFF", // Cyan
            "#0000FF", // Blue
            "#4B0082", // Indigo
            "#8B00FF"  // Violet
          ]}
          rotation={150}
          speed={0.38}
          scale={5.12}
          frequency={1.2}
          warpStrength={0.9}
          mouseInfluence={0.04}
          parallax={0.5}
          noise={0.10}
          transparent
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            mixBlendMode: "absolute", // helps white/black blend more naturally
            opacity: 0.95
          }}
        />
        {/* Background gradient overlay, reduced opacity for blending */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950/20 pointer-events-none" style={{ opacity: 0.7, zIndex: 1 }}></div> */}
        {/* Main content above background */}
        <div className="absolute inset-0 flex items-center justify-center min-h-screen p-4 z-10">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div
              ref={logoRef}
              className="text-center mb-4"
            >
              
              <h1 className="text-5xl font-bold text-neutral-100 mb-2 tracking-tight">
                Welcome
              </h1>
              <p className="text-neutral-400 text-lg">
                {register ? 'Create your account' : "Sign in to continue"}
              </p>
            </div>
            {/* Main form container with frosted glass effect */}
            <div
              ref={formContainerRef}
              className="relative"
            >
              {/* Frosted glass background */}
              <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-4xl rounded-2xl border-2 border-neutral-700/50 shadow-2xl"></div>
              {/* Form content */}
              <div className="relative p-8 ">
                {/* Form */}
                <form onSubmit={(e) => {
                  e.preventDefault();  // ← This stops the browser from submitting
                  register ? handleRegister() : handleLogin();
                }}
                  className="space-y-6">
                  {/* Name field (register only) */}
                  {register && (
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        ref={addToInputRefs}
                        type="text"
                        name="name"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  )}
                  {/* Email field */}
                  <div>
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      ref={addToInputRefs}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  {/* Password field */}
                  <div>
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        ref={addToInputRefs}
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 pr-12 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  {/* Confirm password (register only) */}
                  {register && (
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Confirm Password
                      </label>
                      <input
                        ref={addToInputRefs}
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Confirm your password"
                      />
                    </div>
                  )}
                  {/* Confirm role (register only) */}
                  {register && (
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        You are
                      </label>
                      <select
                        ref={addToInputRefs}
                        name="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-2 me-5 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-800/50 focus:border-red-700/50 transition-all duration-200 backdrop-blur-sm"
                      >
                        <option  value="" disabled>Select your role</option>
                        <option  value="freelancer">Freelancer</option>
                        <option  value="client">Client</option>
                      </select>
                    </div>
                  )}
                  {/* Remember me / Forgot password */}
                  {register && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center text-neutral-400">
                        <input type="checkbox" className="mr-2 rounded border-neutral-600 bg-neutral-700 text-red-600 focus:ring-red-500" />
                        Remember me
                      </label>
                      <Link to="/forgot-password" className="text-red-400 hover:text-red-300 transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                  )}
                  {/* Submit button */}
                  {
                    register ?
                      <button onClick={handleRegister} type="button" className="w-full py-3 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-800/50 shadow-lg">Register </button>
                      :
                      <button
                        type="button"
                        onClick={handleLogin}
                        className="w-full py-3 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-800/50 shadow-lg">
                        Login
                      </button>}
                </form>
                {/* Divider */}
                {!register ?
                <div className="my-6 flex items-center">
                  <div className="flex-1 h-px bg-neutral-600/50"></div>
                  <span className="px-4 text-neutral-500 text-sm">or continue with</span>
                  <div className="flex-1 h-px bg-neutral-600/50"></div>
                </div>
                :
                <p></p>
                }
                {/* Social login buttons */}
                {
                  !register ?
                  <div className="px-3 gap-3">
                  
                      <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse)
                        handleGoogleLogin(credentialResponse)
                      }}
                      onError={() => {
                        console.log('Login Failed')
                      }}
                    />
                  
                </div>
                :
                <p></p>
                }
                {/* Toggle between login/register */}
                <div className="mt-6 text-center">
                  <p className="text-neutral-400">
                    {!register ? "Don't have an account? " : "Already have an account? "}
                    {
                      register ?
                        <button type="button" className="text-red-400 hover:text-red-300 font-medium transition-colors"> <Link to={'/login'} className=' ms-5'>Sign in</Link></button>
                        :
                        <Link to={"/login"}>
                          <button
                            type="button"
                            className="text-red-400 hover:text-red-300 font-medium transition-colors"> <Link to={'/register'} className=' ms-5'>Sign up</Link></button>
                        </Link>
                    }
                  </p>
                </div>
              </div>
            </div>
            {/* Back to home link */}
            <div
              className="text-center mt-8"
            >
              <Link
                to="/"
                className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors inline-flex items-center"
              >
                ← Back to home
              </Link>
            </div>
          </div>
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
      </div>
    </>
  )
}

export default Auth