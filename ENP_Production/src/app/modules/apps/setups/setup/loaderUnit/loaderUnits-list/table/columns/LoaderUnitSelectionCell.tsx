import {FC, useMemo} from 'react'
import {ID} from '../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'

type Props = {
  fleetID: ID
}

const LoaderUnitSelectionCell: FC<Props> = ({fleetID}) => {
  const {selected, onSelect} = useListView()
  const isSelected = useMemo(() => selected.includes(fleetID), [fleetID, selected])
  return (
    <div className='form-check form-check-custom form-check-solid'>
      <input
        className='form-check-input'
        type='checkbox'
        data-kt-check={isSelected}
        data-kt-check-target='#kt_table_loaderunits .form-check-input'
        checked={isSelected}
        onChange={() => onSelect(fleetID)}
      />
    </div>
  )
}

export {LoaderUnitSelectionCell}
