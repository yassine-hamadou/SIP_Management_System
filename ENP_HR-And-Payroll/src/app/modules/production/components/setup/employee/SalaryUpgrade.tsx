import { SetupComponent } from '../CommonSetupComponent'

const SalaryUpgrade = () => {
  const data = {
    title: 'Salary Upgrades',
    url: 'SalaryUpgrades',
  }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { SalaryUpgrade }

