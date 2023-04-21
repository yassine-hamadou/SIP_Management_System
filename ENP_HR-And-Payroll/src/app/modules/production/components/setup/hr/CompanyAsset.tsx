import { SetupComponent } from "../CommonSetupComponent"

const CompanyAsset = () => {
  const data = {
    title: 'Company Assets',
    url: 'CompanyAssets',
    }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { CompanyAsset }

