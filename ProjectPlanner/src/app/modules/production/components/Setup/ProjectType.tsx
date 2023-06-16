import { SharedComponent } from "../SharedComponent"

const ProjectType = () => {
  
  const data = {
    title: 'ProjectType',
    url: `ProjectTypes`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { ProjectType }
