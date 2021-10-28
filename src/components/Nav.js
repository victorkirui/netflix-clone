import React, { useState,useEffect } from 'react'
import './Nav.css'
import Logo from '../Images/Netflix-Logo.png'
import Avatar from '../Images/Netflix-avatar.png'


function Nav() {
    const [scroll,setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                setScroll(true)
            }else{
                setScroll(false)
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav ${scroll && "nav__scroll"}`}>
            <img className="nav__logo" src={Logo} alt="Netflix Logo" />

            <img className="nav__avatar" src={Avatar} alt="Netflix Avatar" />
        </div>
    )
}

export default Nav
