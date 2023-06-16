import { SharedComponent } from "../SharedComponent"

const Activity = () => {
  
  const data = {
    title: 'Activity',
    url: `Activities`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { Activity }