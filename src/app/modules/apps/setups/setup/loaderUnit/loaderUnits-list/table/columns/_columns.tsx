// @ts-nocheck
import {Column} from 'react-table'
import {LoaderUnitInfoCell} from './LoaderUnitInfoCell'
import {LoaderUnitLastLoginCell} from './LoaderUnitLastLoginCell'
import {LoaderUnitTwoStepsCell} from './LoaderUnitTwoStepsCell'
import {LoaderUnitActionsCell} from './LoaderUnitActionsCell'
import {LoaderUnitSelectionCell} from './LoaderUnitSelectionCell'
import {LoaderUnitCustomHeader} from './LoaderUnitCustomHeader'
import {LoaderUnitSelectionHeader} from './LoaderUnitSelectionHeader'
import {LoaderUnit} from '../../core/_models'

const loaderUnitsColumns: ReadonlyArray<Column<LoaderUnit>> = [
  {
    Header: (props) => <LoaderUnitSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <LoaderUnitSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <LoaderUnitInfoCell loaderUnit={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => <LoaderUnitCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
  },
  // {
  //   Header: (props) => (
  //     <LoaderUnitCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <LoaderUnitLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <LoaderUnitCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <LoaderUnitTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <LoaderUnitCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <LoaderUnitCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <LoaderUnitActionsCell id={props.data[props.row.index].id} />,
  },
]

export {loaderUnitsColumns}
