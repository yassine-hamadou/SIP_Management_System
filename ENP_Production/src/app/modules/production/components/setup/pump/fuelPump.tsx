import { SetupComponent } from "../DynamicComponent"


const FuelPump = () => {
    const data = {
      url: 'ProPump',
      title: 'pump',
    }
  
    return (
      <SetupComponent data={data} hasDescription={false} hasDuration={false} />
    )
  }

  export { FuelPump }