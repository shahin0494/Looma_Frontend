// src/users/pages/Home.jsx
import React from 'react'
import { useRef } from 'react';
import Header from '../components/Header'
import VrbProx from '../../reactbits/VariableProx'
import Squares from '../../reactbits/Squares';
import MagnetLines from '../../reactbits/MagnetLines'
import ScrollReveal from '../../reactbits/ScrollReveal'

function Home() {
  const containerRef = useRef(null);

  return (
    <>
          <Header />
          <Squares
            className='w-full  min-h-screen'
            speed={0.4}
            squareSize={100}
            direction='diagonal'
            borderColor='#f0f0f0'
            hoverFillColor='#ffffff'
          >
            <section className='w-full h-screen  mt-30  text-black pointer-events-none'>
              <div className='grid grid-cols-2 '>
                <div className='flex items-center justify-between px-16 '>
                  <h3 className='text-9xl flex items-center font-medium'>
                    Your vision, <br />
                    reimagined
                  </h3>
                  <div className='pointer-events-auto'>
                    <MagnetLines
                      rows={6}
                      columns={6}
                      containerSize="60vmin"
                      lineColor="black"
                      lineWidth="0.8vmin"
                      lineHeight="5vmin"
                      baseAngle={0}
                      style={{ margin: '2rem auto' }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='w-full h-screen flex mt-10  justify-center px-8'>
                <div className='me-10 px-50'>
                <img width={"2800px"} height={"1400px"} src="/flower.png" alt="" />
              </div>
              <div className='text-justify text-lg px-10'>
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={10}
                >
                 This website is a sophisticated portfolio platform designed to showcase your creative work with clarity and impact. With interactive visuals and seamless navigation, it allows professionals to present their projects and expertise in a compelling, polished manner.
                </ScrollReveal>
              </div>
          
            </section>
          </Squares>
      
    </>
  )
}

export default Home