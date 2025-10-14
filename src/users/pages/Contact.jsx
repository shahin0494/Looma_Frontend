import React from 'react'
import Header from '../components/Header'
import logo from '/logo22.jpg'
import CurvedLoop from '../../reactbits/CurvedLoop'
import { FaInstagram } from 'react-icons/fa'
import { PiFacebookLogo } from 'react-icons/pi'
import { SiLinkedin } from 'react-icons/si'
import DotGrid from '../../reactbits/Dotgrid'
import ClickSpark from '../../reactbits/ClickSpark'


function Contact() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}>
      <div className='bg-neutral-900 '>
        <Header
          logo={logo}
          llogo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
            { label: 'Hire', href: '/Hire-me' },
            { label: 'Dashboard', href: '/Dashboard' },
            { label: 'Contact', href: '/Contact' },
        ]}
        activeHref="/Contact"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#262626"
        pillColor="#262626 "
        hoveredPillTextColor="#DC2626"
        pillTextColor="#E5E5E5"
        />
        <div style={{ display: "grid", gridTemplateColumns: "500px 1180px" }} className='bg-red-700' >
          <div style={{ width: '100%', height: '600px', position: 'relative' }} >
            <div className="relative w-full h-screen">
              <DotGrid
                dotSize={3}
                gap={100}
                baseColor="#171717"
                activeColor="#FAFAFA"
                proximity={150}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
              />
              <div className="absolute inset-0 flex flex-col  mt-29 ">
                {/* <h1 style={{fontStyle:"italic"}} className="text-sm text-justify font-medium text-neutral-950  px-2 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident dolore. Sed ipsam quasi quam iusto id, libero, dolorum perferendis in vero asperiores cumque! Consectetur iste quidem dicta error tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae sit odio debitis doloremque quia facere repudiandae illo consequatur perferendis sed voluptate, dolore, quasi provssimos optio asperiores veniam impedit tenetur accusamus molestiae amet eos error? Mollitia quasi iste possimus consectetur in explicabo aspernatur?</h1> */}
                
                
              </div>
            </div>
          </div>
          <div className='bg-neutral-900 -mt-30 h-auto'>
            <div className='mt-110 px-15 font-extralight  text-xl text-neutral-400'>
              <div className='flex justify-between px-10'>
                
                <div>
                  <h1 className='text-6xl'>Write Us  </h1>
                  <p className='text-sm mt-3' >support@looma.in</p>
                </div>
                <div >
                  <h1 className='text-6xl'>Find Us </h1>
                  <div className='flex justify-start items-center gap-3 text-sm mt-3'>
                    <FaInstagram />
                    <PiFacebookLogo />
                    <SiLinkedin />
                  </div>
                </div>
              </div>
              <div className='px-10 mt-15'>
                <h1 className='text-6xl'>Talk to Us</h1>
                <p className='text-sm mt-3'>+910293490</p>
              </div>
            </div>
            <div className=' mt-80 bottom-0 ps-25'>
              <CurvedLoop
                marqueeText="BUILD CRAFT PROPEL Inspire "
                speed={1}
                curveAmount={0}
                direction="right"
                interactive={true}
                className="custom-text-style"
              />
            </div>
          </div>
        </div>
      </div>
    </ClickSpark>
  )
}

export default Contact