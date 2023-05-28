import { ActivityComponent } from "../components/ActivityComponent"
import { SetupComponent } from "../components/DynamicComponent"


const ActivityDetails = () => {
  const data = {
    url: 'ProActivityDetails',
    title: 'Activity Details',
  }

  return (
    <div className='card border border-gray-400 '
      style={{
        backgroundColor: 'white',
        paddingTop: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <ActivityComponent data={data} 
      hasActivityType={false} 
      />
    </div>
  )
}

export { ActivityDetails }

