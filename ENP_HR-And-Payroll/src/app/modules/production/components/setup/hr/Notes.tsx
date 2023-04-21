import { SetupComponent } from "../CommonSetupComponent"

const Notes = () => {
  const data = {
    title: 'Note',
    url: 'NoteCategories',
    }
  return (
    <div>
      < SetupComponent data={data} />    
    </div>
  )
}

export { Notes }

