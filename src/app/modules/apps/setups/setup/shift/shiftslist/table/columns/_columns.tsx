// @ts-nocheck
import {Column} from 'react-table'
import {ShiftInfoCell} from './ShiftInfoCell'
import {ShiftLastLoginCell} from './ShiftLastLoginCell'
import {ShiftTwoStepsCell} from './ShiftTwoStepsCell'
import {ShiftActionsCell} from './ShiftActionsCell'
import {ShiftSelectionCell} from './ShiftSelectionCell'
import {ShiftCustomHeader} from './ShiftCustomHeader'
import {ShiftSelectionHeader} from './ShiftSelectionHeader'
import {Shift} from '../../core/_models'

const ShiftsColumns: ReadonlyArray<Column<Shift>> = [
  // {
  //   Header: (props) => <ShiftSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <ShiftSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <ShiftCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <ShiftInfoCell shift={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ShiftCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  // {
  //   Header: (props) => (
  //     <ShiftCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <ShiftLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <ShiftCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <ShiftTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <ShiftCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <ShiftCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ShiftActionsCell id={props.data[props.row.index].id} />,
  },
]

export {ShiftsColumns}
