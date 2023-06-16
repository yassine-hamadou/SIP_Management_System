import { SharedComponent2 } from "../SharedComponent2"

const Supplier = () => {
  
  const data = {
    title: 'Supplier',
    url: `Suppliers`,
    }
  return (
    <div>
      < SharedComponent2 data={data} />    
    </div>
  )
}

export { Supplier }