// @ts-nocheck
import {Column} from 'react-table'
import {MineAreaInfoCell} from './MineAreaInfoCell'
import {MineAreaLastLoginCell} from './MineAreaLastLoginCell'
import {MineAreaTwoStepsCell} from './MineAreaTwoStepsCell'
import {MineAreaActionsCell} from './MineAreaActionsCell'
import {MineAreaSelectionCell} from './MineAreaSelectionCell'
import {MineAreaCustomHeader} from './MineAreaCustomHeader'
import {MineAreaSelectionHeader} from './MineAreaSelectionHeader'
import {MineArea} from '../../core/_models'

const mineAreaColumns: ReadonlyArray<Column<MineArea>> = [
  // {
  //   Header: (props) => <MineAreaSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <MineAreaSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <MineAreaCustomHeader tableProps={props} title='Code' className='min-w-125px' />,
    id: 'code',
    Cell: ({...props}) => <MineAreaInfoCell mineArea={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <MineAreaCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  // {
  //   Header: (props) => (
  //     <MineAreaCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <MineAreaLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <MineAreaCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <MineAreaTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  {
    Header: (props) => (
      <MineAreaCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    accessor: 'status',
  },
  {
    Header: (props) => (
      <MineAreaCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <MineAreaActionsCell id={props.data[props.row.index].id} />,
  },
]

export {mineAreaColumns}
