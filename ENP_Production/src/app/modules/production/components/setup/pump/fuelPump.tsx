import { SetupComponent } from "../DynamicComponent"


const FuelPump = () => {
    const data = {
      url: 'ProductionPump',
      title: 'pump',
    }
  
    return (
      <SetupComponent data={data} hasDescription={false} hasDuration={false} />
    )
  }

  export { FuelPump }