// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  // {
  //   Header: (props) => <UserSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Code' className='min-w-70px border-end' />,
    id: 'code',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='First name' className='min-w-125px border-end' />,
    accessor: 'first_name',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Middle name' className='min-w-125px border-end' />,
    accessor: 'middle_name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Surname' className='min-w-100px border-end' />
    ),
    accessor: 'surname',
    
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='DOB' className='min-w-70px border-end' />
    ),
    accessor: 'dob',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sex' className='min-w-70px border-end' />
    ),
    accessor: 'sex',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Salary Grade' className='min-w-125px border-end'/>
    ),
    accessor: 'salary_grade',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Department' className='min-w-125px border-end' />
    ),
    accessor: 'department',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Basic Salary' className='min-w-125px border-end' />
    ),
    accessor: 'basic_salary',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-70px border-end' />
    ),
    accessor: 'status',
  },  
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-center min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
