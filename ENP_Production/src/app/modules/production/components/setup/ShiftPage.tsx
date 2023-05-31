import { SetupComponent } from './components/DynamicComponent'

const ShiftPage = () => {
  const data = {
    url: 'ProductionShift',
    title: 'Shift',
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
      <SetupComponent data={data} hasDescription={false} hasDuration={true} />
    </div>
  )
}

export { ShiftPage }

