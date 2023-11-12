import React from 'react'
import '../Pages/Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='Home_main_div'>
        <div className='Home_title_div'>
            <label className='name'>MOCHIZUKI KEN</label>
            <label className='disc'>Full Stack Developer</label>
        </div>
        <div className='Home_links_div'>
            <Link to={'/Projects'} className="link">Projects</Link>
            <Link to={'/About'} className="link">About</Link>
        </div>
    </div>
  )
}
