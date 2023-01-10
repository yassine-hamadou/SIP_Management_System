// @ts-nocheck
import {Column} from 'react-table'
import {OriginInfoCell} from './OriginInfoCell'
import {OriginLastLoginCell} from './BankLastLoginCell'
import {BankTwoStepsCell} from './BankTwoStepsCell'
import {OriginActionsCell} from './OriginActionsCell'
import {OriginSelectionCell} from './OriginSelectionCell'
import {OriginCustomHeader} from './OriginCustomHeader'
import {OriginSelectionHeader} from './OriginSelectionHeader'
import {Origin} from '../../core/_models'

const originsColumns: ReadonlyArray<Column<Origin>> = [
  {
    Header: (props) => <OriginSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <OriginSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <OriginCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
  //   id: 'code',
  //   Cell: ({...props}) => <OriginInfoCell Origin={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <OriginCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    accessor: 'code',
  },
  {
    Header: (props) => <OriginCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <OriginCustomHeader tableProps={props} title='Description' className='min-w-125px' />,
    accessor: 'description',
  },
  // {
  //   Header: (props) => (
  //     <OriginCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <OriginLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <OriginCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <OriginTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <OriginCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <OriginCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <OriginActionsCell id={props.data[props.row.index].id} />,
  },
]

export {originsColumns}
