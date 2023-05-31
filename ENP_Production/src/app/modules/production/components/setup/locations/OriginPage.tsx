import { SetupComponent } from '../components/DynamicComponent'

const OriginPage = () => {
  const data = {
    url: 'ProductionOrigin',
    title: 'origin',
  }

  return (
    <SetupComponent data={data} hasDescription={true} hasDuration={false} />
  )
}

export { OriginPage }

