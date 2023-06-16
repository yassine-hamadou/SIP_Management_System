
import { SharedComponent2 } from "../SharedComponent2"

const Client = () => {
  
  const data = {
    title: 'Client',
    url: `Clients`,
    }
  return (
    <div>
      < SharedComponent2 data={data} />    
    </div>
  )
}

export { Client }