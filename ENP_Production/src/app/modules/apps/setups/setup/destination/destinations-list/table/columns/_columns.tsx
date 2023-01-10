// @ts-nocheck
import {Column} from 'react-table'
import {DestinationInfoCell} from './DestinationInfoCell'
// import {DestinationLastLoginCell} from './DestinationLastLoginCell'
// import {DestinationTwoStepsCell} from './DestinationTwoStepsCell'
import {DestinationActionsCell} from './DestinationActionsCell'
import {DestinationSelectionCell} from './DestinationSelectionCell'
import {DestinationCustomHeader} from './DestinationCustomHeader'
import {DestinationSelectionHeader} from './DestinationSelectionHeader'
import {Destination} from '../../core/_models'

const destinationsColumns: ReadonlyArray<Column<Destination>> = [
  // {
  //   Header: (props) => <DestinationSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <DestinationSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <DestinationCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <DestinationInfoCell Destination={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <DestinationCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <DestinationCustomHeader tableProps={props} title='status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <DestinationCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DestinationActionsCell id={props.data[props.row.index].id} />,
  },
]

export {destinationsColumns}
