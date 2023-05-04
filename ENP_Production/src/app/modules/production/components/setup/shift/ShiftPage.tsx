import { SetupComponent } from '../DynamicComponent'

const ShiftPage = () => {
  const data = {
    url: 'ProductionShift',
    title: 'Shift',
  }

  return (
    <SetupComponent data={data} hasDescription={false} hasDuration={true} />
  )
}

export { ShiftPage }

