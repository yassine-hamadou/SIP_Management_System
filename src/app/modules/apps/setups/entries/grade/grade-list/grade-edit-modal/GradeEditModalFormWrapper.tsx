import {useQuery} from 'react-query'
import {GradeEditModalForm} from './GradeEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getGradeById} from '../core/_requests'

const GradeEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: grade,
    error,
  } = useQuery(
    `${QUERIES.GRADES_LIST}-grade-${itemIdForUpdate}`,
    () => {
      return getGradeById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <GradeEditModalForm isGradeLoading={isLoading} grade={{id: undefined}} />
  }

  if (!isLoading && !error && grade) {
    return <GradeEditModalForm isGradeLoading={isLoading} grade={grade} />
  }

  return null
}

export {GradeEditModalFormWrapper}
