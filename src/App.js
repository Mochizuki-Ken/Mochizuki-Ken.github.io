import React,{createContext} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'; import P404 from './Pages/404';import Projects from './Pages/Projects';
import About from './Pages/About'; import Project_detail from './Pages/Project_detail';
export const SearchContext=createContext(null)
export default function App() {
  const [search,setsearch]=React.useState('all')
  return (
    <BrowserRouter>
        <SearchContext.Provider value={{search,setsearch}}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Projects' element={<Projects/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Project' element={<Project_detail/>}>
                <Route path=':pid' element={<Project_detail/>}/>
              </Route>
              <Route path='*' element={<Home/>}/>
          </Routes>
        </SearchContext.Provider>
    </BrowserRouter>
  )
}
