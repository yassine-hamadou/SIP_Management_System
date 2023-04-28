import { SetupComponent } from "../DynamicComponent"


const ActivityTable = () => {
  const data = {
    url: 'ProductionActivity',
    title: 'origin',
  }

  return (
    <SetupComponent data={data} hasDescription={false} hasDuration={false} />
  )
}

export { ActivityTable }

