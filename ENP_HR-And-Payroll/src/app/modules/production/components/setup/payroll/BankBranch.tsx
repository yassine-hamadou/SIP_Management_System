import { SetupComponent } from '../CommonSetupComponent'

const BankBranch = () => {
  
  const data = {
    title: 'Bank Branch',
    url: `BankBranches`,
    }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { BankBranch }
