import Navbar from './component/Nav'
import Hero from './component/Hero'
import './index.css'
import Project from './component/Project'
import ProjectCard from './component/ProjectCard'
import ProjectData from './Data/ProjectData'
import Exclusive from './component/Exclusive'
import ExclusiveCard from './component/ExclusiveCard'
import ExclusiveData from './Data/ExclusiveData'
import Project2 from './component/Project2'
import Project2Card from './component/Project2Card'
import Project2Data from './Data/Project2Data'
import Creative from './component/Creative'
import CreativeCard from './component/CreativeCard'
import CreativeData from './Data/CreativeData'
import Hwork from './component/Hwork'
import HworkCard from './component/HworkCard'
import HworkData from './Data/HworkData'
import Apply from './component/Apply'
import Footer from './component/Footer'



function App() {

 const cardContents = ProjectData.map(item => {
   return (

    <div className='project-card-container'>
           <ProjectCard
      key = {item}
      {...item}
     />
        
    </div>  )

 })

 const exclusiveContents = ExclusiveData.map(item => {
    return (
      <ExclusiveCard
      key = {item.id}
      {...item}
      
      />
    )
 })

 const project2ardContents = Project2Data.map(item => {
   return (
    <Project2Card     
    key = {item.id}
    {...item}
    
    />

   )
 })

 const creativeDataContents = CreativeData.map(item => {
   return (
     <CreativeCard
     key = {item.id}
     {...item}
     
     
     />
   )
 })

 const HworkContent = HworkData.map(item => {
  return (

   <div className='project-card-container'>
          <HworkCard
     key = {item.id}
     {...item}
    />
       
   </div>  )

})

  return (
    <div className='main-container overley' >          
      
      <Navbar/>
      <Hero />
      <Project />     

      <div className='app-project-card-container'>
        {cardContents}
      </div> 
      <Exclusive />

      <div className='exclusive-card-container'> 
      {exclusiveContents}      
      </div>   

      <Project2 /> 

      <div className='project2-contents'>
        {project2ardContents}

      </div>

      <Creative />

      <div className='creativeCard-contents'>
        {creativeDataContents}
      </div>

      <Hwork />

      <div className='Hwork-contents'>
        {HworkContent}
      </div>

      <Apply />

      <Footer  />

      

      
     
    

     

      
      
    </div>
  );
}

export default App;
