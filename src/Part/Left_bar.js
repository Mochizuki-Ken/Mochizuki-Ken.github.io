import React from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../App'
import { useNavigate } from 'react-router'
export default function Left_bar() {
  const {search,setsearch}=React.useContext(SearchContext)
  const [stext,setstext]=React.useState(null)
  const Navigate=useNavigate()
  function Search(){
    setsearch(stext)
    if (window.location.pathname!=='/Products'){
      Navigate('/Projects')
      console.log(search)
    }
  }
  return (
    <div className='Projects_navbar_div'>
        <div className='Projects_navbar_title_div'>
          <label className='Projects_navbar_title'>MOCHIZUKI KEN</label>
          <div className='Projects_navbar_search_div'>
            <input placeholder='Search' onChange={(e)=>{setstext(e.target.value)}} />
            <button onClick={Search}>Search</button>
          </div>
        </div>
        <div className='Projects_navbar_link_div'>
            <Link to={'/'} className="link">Home</Link>
            <Link to={'/Projects'} className="link">Projects</Link>
            <Link to={'/About'} className="link">About</Link>
        </div>
    </div>
  )
}
