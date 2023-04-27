import { SetupComponent } from '../CommonSetupComponent'

const DeductionCats = () => {

  const data = {
    title: 'Deductions Category',
    url: 'DeductionCats',
    }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { DeductionCats }

