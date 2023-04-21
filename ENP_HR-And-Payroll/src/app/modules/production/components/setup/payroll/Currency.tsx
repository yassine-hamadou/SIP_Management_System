import { SetupComponent } from '../CommonSetupComponent'

const Currency = () => {
  const data = {
    title: 'Currency',
    url: 'Currencies',
    }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { Currency }

