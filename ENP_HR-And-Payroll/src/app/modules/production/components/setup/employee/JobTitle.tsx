import { SetupComponent } from "../CommonSetupComponent"

const JobTitle = () => {

  const data = {
    title: 'Job Titles',
    url: 'JobTitles',
  }

  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { JobTitle }

