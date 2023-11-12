import React from 'react'
import '../Part/Card.css'
import { Link } from 'react-router-dom'
export default function Card({project_name,link_url,short_intro,img}) {
  return (
    <div className='card_main_div' style={{backgroundImage:`url(${img})`}}>
      {/* <img src={img} alt='img' className='card_img'></img> */}
      <div className='card_info_div'>
        <label>{project_name}</label>
        <p>{short_intro}</p>
        <div className='card_button_div'>
          <a href={link_url}>Go Project</a>
          <Link to={`/Project/${project_name}`} className='link'>learn more</Link>
        </div>
      </div>
    </div>
  )
}
