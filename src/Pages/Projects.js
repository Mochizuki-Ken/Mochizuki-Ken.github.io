import React from 'react'
import '../Pages/Projects.css'
import { SearchContext } from '../App'
import Card from '../Part/Card'
import axios from 'axios'
import Left_bar from '../Part/Left_bar'
export default function Projects() {
    const [projects,setProjects]=React.useState([])//[{project_name:'LSS_App',link_url:'https://metassi.github.io/Lss.vip.github.io/login_page.html',intro:'A web very very very very good',img:'https://metassi.github.io/Lss.vip.github.io/lss-logo.png'}]
    const {search,setsearch}=React.useContext(SearchContext)
    React.useEffect(()=>{
        axios.get('https://metassi.github.io/JasonKen_intro.github.io/projects.json').then((reponse)=>{
            // setProjects(reponse.data)
            // console.log(reponse.data)
            if (search!=='all'){
                setProjects([])
                var a=[];
                (reponse.data).forEach(element => {
                    if (((element.project_name).toLowerCase()).includes(search.toLowerCase()) || ((element.keyword).toLowerCase()).includes(search.toLowerCase())){
                        a.push(element)
                    }
                });
                setProjects(a)
            }else{
                setProjects(reponse.data)
            }
            
        })
    },[search])
    
    return (
    <div className='Projects_main_div'>
        <Left_bar/>
        <div className='Projects_show_div'>
            {
                projects.map((project,index)=>{
                    return(
                        <Card project_name={project.project_name} link_url={project.link_url} short_intro={project.short_intro} img={project.img} key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}
