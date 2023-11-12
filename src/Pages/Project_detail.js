import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Left_bar from '../Part/Left_bar'
import axios from 'axios'
import '../Pages/Project_detail.css'
export default function Project_detail() {
    const {pid}=useParams()
    const [projects,setProjects]=React.useState([])//[{project_name:'LSS_App',link_url:'https://metassi.github.io/Lss.vip.github.io/login_page.html',intro:'A web very very very very good',img:'https://metassi.github.io/Lss.vip.github.io/lss-logo.png'}]
    React.useEffect(()=>{
        axios.get('https://mochizuki-ken.github.io/Projects.json').then((reponse)=>{
            (reponse.data).forEach(element => {
                if (element.project_name===pid){
                    setProjects([element])
                }
            });
        })
    },[])
  return (
    <div className='Projects_main_div'>
        <Left_bar/>
        <div className='Project_detail_show_div'>
            {
                projects.map((project,index)=>{
                    return(
                        <div key={index} className="Project_detail_div">
                            <img src={project.img} className="Project_detail_img"></img>
                            <div className="Project_detail_info">
                                <label className="Project_detail_name">{project.project_name}</label>
                                <p className="Project_detail_intro">{project.intro}</p>
                                <div className="Project_detail_btn_div">
                                    <a href={project.link_url} >Go Project</a>
                                    <Link to={'/Projects'} className="link">Back</Link>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    </div>
  )
}
