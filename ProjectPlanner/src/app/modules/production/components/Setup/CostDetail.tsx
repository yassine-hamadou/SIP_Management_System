import { SharedComponent } from "../SharedComponent"

const CostDetail = () => {
  
  const data = {
    title: 'CostDetail',
    url: `CostDetails`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { CostDetail }