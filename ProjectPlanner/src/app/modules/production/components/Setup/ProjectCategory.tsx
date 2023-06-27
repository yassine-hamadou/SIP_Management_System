import { SharedComponent } from "../SharedComponent"

const ProjectCategory = () => {
  
  const data = {
    title: 'Project Category',
    url: `ProjectCategories`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { ProjectCategory }