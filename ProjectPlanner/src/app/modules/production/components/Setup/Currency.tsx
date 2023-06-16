import { SharedComponent } from "../SharedComponent"

const Currency = () => {
  
  const data = {
    title: 'Currency',
    url: `Currencies`,
    }
  return (
    <div>
      < SharedComponent data={data} />    
    </div>
  )
}

export { Currency }