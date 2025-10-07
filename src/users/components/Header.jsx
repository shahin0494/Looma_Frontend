import React from 'react'
import Nav from '../../reactbits/Nav'
import logo from '/logo.png'

const Header = () => {
  const items = [
    {
      label: "About Me",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [

        { label: "Bio", ariaLabel: "About Me Bio" },
        { label: "Skills", ariaLabel: "My Skills" }
      ]
    },
    {
      label: "Work",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Portfolio", ariaLabel: "Portfolio Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email Me" },
        { label: "LinkedIn", ariaLabel: "LinkedIn Profile" },
        { label: "Instagram", ariaLabel: "Instagram Profile" }
      ]
    }
  ];

  return (
    <div className='mb-20'>
      <Nav
        logo={logo}
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      /></div>
  )
}

export default Header