import { SetupComponent } from '../CommonSetupComponent'

const BenefitCats = () => {

  const data = {
    title: 'Benefits Category',
    url: 'BenefitCats',
    }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { BenefitCats }

