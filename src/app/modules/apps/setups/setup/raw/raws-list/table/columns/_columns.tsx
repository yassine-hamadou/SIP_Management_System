// @ts-nocheck
import {Column} from 'react-table'
import {RawInfoCell} from './RawInfoCell'

import {RawActionsCell} from './RawActionsCell'
import {RawSelectionCell} from './RawSelectionCell'
import {RawCustomHeader} from './RawCustomHeader'
import {RawSelectionHeader} from './RawSelectionHeader'
import {Raw} from '../../core/_models'

const rawsColumns: ReadonlyArray<Column<Raw>> = [
  {
    Header: (props) => <RawSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <RawSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <RawCustomHeader tableProps={props} title='Id' className='min-w-125px' />,
    id: 'Id',
    Cell: ({...props}) => <RawInfoCell raw={props.data[props.row.index]} />,
  },
  
  ,
  {
    Header: (props) => <RawCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    accessor: 'name',
  },
  {
    Header: (props) => (
      <RawCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <RawActionsCell id={props.data[props.row.index].id} />,
  },
]

export {rawsColumns}
