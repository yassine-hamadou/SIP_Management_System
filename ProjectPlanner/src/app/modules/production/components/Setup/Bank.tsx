import { SharedComponent } from "../SharedComponent"

const Bank = () => {
  
  const data = {
    title: 'Bank',
    url: `Banks`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { Bank }