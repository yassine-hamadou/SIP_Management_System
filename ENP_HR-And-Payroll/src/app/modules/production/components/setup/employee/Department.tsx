import { SetupComponent } from "../CommonSetupComponent"


const Department = () => {
  const data = {
    title: 'Departments',
    url: 'Departments',
  }

  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { Department }

