import { useQuery } from "react-query"
import { fetchDocument } from "../../../../services/ApiCalls"
import { SharedComponent } from "../SharedComponent"

const CostCategory = () => {
  
  const { data: CostCategories } = useQuery('costCategories', ()=> fetchDocument('CostCategories'), { cacheTime: 5000 })
  const data = {
    title: 'CostCategory',
    url: `CostCategories`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { CostCategory }