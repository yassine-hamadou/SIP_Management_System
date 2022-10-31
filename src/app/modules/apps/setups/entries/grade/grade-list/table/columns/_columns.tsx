// @ts-nocheck
import {Column} from 'react-table'
import {GradeInfoCell} from './GradeInfoCell'
// import {GradeLastLoginCell} from './GradeLastLoginCell'
// import {GradeTwoStepsCell} from './GradeTwoStepsCell'
import {GradeActionsCell} from './GradeActionsCell'
import {GradeSelectionCell} from './GradeSelectionCell'
import {GradeCustomHeader} from './GradeCustomHeader'
import {GradeSelectionHeader} from './GradeSelectionHeader'
import {Grade} from '../../core/_models'

const gradeColumns: ReadonlyArray<Column<Grade>> = [
  // {
  //   Header: (props) => <GradeSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <GradeSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Date' className='min-w-125px border-end border-top' />,
    id: 'name',
    Cell: ({...props}) => <GradeInfoCell grade={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Destination' className='min-w-125px border-end border-top' />,
    accessor: 'destiantion',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Hauler Unit' className='min-w-125px border-end border-top' />,
    accessor: 'hauler_unit',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Loader Unit' className='min-w-125px border-end border-top' />,
    accessor: 'loader_unit',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Material' className='min-w-125px border-end border-top' />,
    accessor: 'material',
  },
  {
    Header: (props) => <GradeCustomHeader tableProps={props} title='Origin' className='min-w-125px border-end border-top' />,
    accessor: 'origin',
  },
  // {
  //   Header: (props) => (
  //     <GradeCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <GradeLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <GradeCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <GradeTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  
  {
    Header: (props) => (
      <GradeCustomHeader tableProps={props} title='Actions' className='text-center min-w-100px border-top' />
    ),
    id: 'actions',
    Cell: ({...props}) => <GradeActionsCell id={props.data[props.row.index].id} />,
  },
]

export {gradeColumns}
