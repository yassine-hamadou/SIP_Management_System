import { Space, Table } from 'antd'
import { KTCardBody, KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchDocument } from '../../../../services/ApiCalls'
const CashFlow = () => {


  const [periodInterval, setPeriodInterval] = useState("1")
  const [period, setPeriod] = useState("")
  const [project, setProject] = useState<any>("")
  const [financeOption, setFinanceOption] = useState("")
  
  const periods: any = [
   
    {
        title: 'January',
        id:1
    },
    {
        title: 'February',
        id:2
    },
    {
        title: 'March',
        id:3
    },
    {
        title: 'April',
        id:4
    },
    {
        title: 'May',
        id:5
    },
    {
        title: 'June',
        id:6
    },
    {
        title: 'July',
        id:7
    },
    {
        title: 'August',
        id:8
    },
    {
        title: 'Septmeber',
        id:9
    },
    {
        title: 'October',
        id:10
    },
    {
        title: 'November',
        id:11
    },
    {
        title: 'December',
        id:12
    }
  ]

  const columns1: any = [
   
    {
        title: 'Jun23',
    },
    {
        title: 'Jul23',
    },
    {
        title: 'Agu23',
    },
    {
        title: 'Sep23',
    },
    {
        title: 'Oct23',
    },
    {
        title: 'Nov23',
    },
    {
        title: 'Dec23',
    }
  ]

  const columns2: any = [
   
    {
        title: 'Jun23',
        id:1
    },
    {
        title: 'Jul23',
        id:2
    },
    {
        title: 'Agu23',
        id:3
    },
    {
        title: 'Sep23',
        id:4
    },
    {
        title: 'Oct23',
        id:5
    },
    {
        title: 'Nov23',
        id:6
    },
    {
        title: 'Dec23',
        id:7
    },
    {
        title: 'Jan24',
        id:8
    },
    {
        title: 'Feb24',
        id:9
    },
    {
        title: 'Mar24',
        id:10
    },
    {
        title: 'Apr24',
        id:11
    },
    {
        title: 'May24',
        id:12
    },
   
  ]

  const columns3: any = [
   
    {
        title: 'Jun23',
    },
    {
        title: 'Jul23',
    },
    {
        title: 'Agu23',
    },
    {
        title: 'Sep23',
    },
    {
        title: 'Oct23',
    },
    {
        title: 'Nov23',
    },
    {
        title: 'Dec23',
    },
    {
        title: 'Jan24',
    },
    {
        title: 'Feb24',
    },
    {
        title: 'Mar24',
    },
    {
        title: 'Apr24',
    },
    {
        title: 'May24',
    },
    {
        title: 'Jun24',
    },
    {
        title: 'Jul24',
    },
    {
        title: 'Agu24',
    },
    {
        title: 'Sep24',
    },
    {
        title: 'Oct24',
    },
    {
        title: 'Nov24',
    },
      
  ]

  const columns4: any = [
   
    {
        title: 'Jan23',
        id:1
    },
    {
        title: 'Feb23',
        id:2
    },
    {
        title: 'Mar23',
        id:3
    },
    {
        title: 'Apr23',
        id:4
    },
    {
        title: 'May23',
        id:5
    },
    {
        title: 'Jun23',
        id:6
    },
    {
        title: 'Jul23',
        id:7
    },
    {
        title: 'Aug23',
        id:8
    },
    {
        title: 'Sep23',
        id:9
    },
    {
        title: 'Oct23',
        id:10
    },
    {
        title: 'Nov23',
        id:11
    },
    {
        title: 'Dec23',
        id:12
    },
    {
        title: 'Jan24',
        id:13
    },
    {
        title: 'Feb24',
        id:14
    },
    {
        title: 'Mar24',
        id:15
    },
    {
        title: 'Apr24',
        id:16
    },
    {
        title: 'May24',
        id:17
    },
    {
        title: 'Jun24',
        id:18
    },
    {
        title: 'Jul24',
        id:19
    },
    {
        title: 'Agu24',
        id:20
    },
    {
        title: 'Sep24',
        id:21
    },
    {
        title: 'Oct24',
        id:22
    },
    {
        title: 'Nov24',
        id:23
    },
    {
        title: 'Dec24',
        id:24
    },
    {
        title: 'Jan25',
        id:25
    },
    {
        title: 'Feb25',
        id:26
    },
    {
        title: 'Mar25',
        id:27
    },
    {
        title: 'Apr25',
        id:28
    },
    {
        title: 'May25',
        id:29
    },
    {
        title: 'Jun25',
        id:30
    },
    {
        title: 'Jul25',
        id:31
    },
    {
        title: 'Agu25',
        id:32
    },
    {
        title: 'Sep25',
        id:33
    },
    {
        title: 'Oct25',
        id:34
    },
    {
        title: 'Nov25',
        id:35
    },
    {
        title: 'Dec25',
        id:36
    },
    {
        title: 'Jan26',
        id:37
    },
    {
        title: 'Feb26',
        id:38
    },
    {
        title: 'Mar26',
        id:39
    },
    {
        title: 'Apr26',
        id:40
    },
    {
        title: 'May26',
        id:41
    },
    {
        title: 'Jun26',
        id:42
    },
    {
        title: 'Jul26',
        id:43
    },
    {
        title: 'Agu26',
        id:44
    },
    {
        title: 'Sep26',
        id:45
    },
    {
        title: 'Oct26',
        id:46
    },
    {
        title: 'Nov26',
        id:47
    },
    {
        title: 'Dec26',
        id:48
    },
    {
        title: 'Jan27',
        id:49
    },
    {
        title: 'Feb27',
        id:50
    },
    {
        title: 'Mar27',
        id:51
    },
    {
        title: 'Apr27',
        id:52
    },
    {
        title: 'May27',
        id:53
    },
    {
        title: 'Jun27',
        id:54
    },
    {
        title: 'Jul27',
        id:55
    },
    {
        title: 'Agu27',
        id:56
    },
    {
        title: 'Sep27',
        id:57
    },
    {
        title: 'Oct27',
        id:58
    },
    {
        title: 'Nov27',
        id:59
    },
    {
        title: 'Dec27',
        id:60
    },
    
       
  ]

  const PeriodData: any = [
   
    {
        title: 'Jun2023',
    },
    {
        title: 'Jul2023',
    },
    {
        title: 'Agu2023',
    },
    {
        title: 'Sep2023',
    },
    {
        title: 'Oct2023',
    },
    {
        title: 'Nov2023',
    },
    {
        title: 'Dec2023',
    },
    {
        title: 'Jan2024',
    },
    {
        title: 'Feb2024',
    },
    {
        title: 'Mar2024',
    },
    {
        title: 'Apr2024',
    },
    {
        title: 'May2024',
    },
    {
        title: 'Jun2024',
    },
    {
        title: 'Jul2024',
    },
    {
        title: 'Agu2024',
    },
    {
        title: 'Sep2024',
    },
    {
        title: 'Oct2024',
    },
    {
        title: 'Nov2024',
    },
    {
        title: 'Dec2024',
    },
    {
        title: 'Jan2025',
    },
    {
        title: 'Feb2025',
    },
    {
        title: 'Mar2025',
    },
    {
        title: 'Apr2025',
    },
    {
        title: 'May2025',
    },
    {
        title: 'Jun2025',
    },
    {
        title: 'Jul2025',
    },
    {
        title: 'Agu2025',
    },
    {
        title: 'Sep2025',
    },
    {
        title: 'Oct2025',
    },
    {
        title: 'Nov2025',
    },
    {
        title: 'Dec2025',
    },
   
  ]

  const PeriodInterval: any = [
   
    {
        title: '6 Months',
        id: 1,
    },
    {
        title: '12 Months',
        id: 2,
    },
    {
        title: '18 Months',
        id: 3,
    },
    {
        title: '24 Months',
        id: 4,
    },
    {
        title: '30 Months',
        id: 5,
    },
    {
        title: '36 Months',
        id: 6,
    },
    {
        title: '42 Months',
        id: 7,
    },
    {
        title: '48 Months',
        id: 8,
    },
    {
        title: '54 Months',
        id: 9,
    },
    {
        title: '60 Months',
        id: 10,
    },
   
  ]

  const { data: Projects } = useQuery('projects', ()=> fetchDocument('Projects'), { cacheTime: 5000 })
  const { data: FinanceOptions } = useQuery('financeOptions', ()=> fetchDocument('FinanceOptions'), { cacheTime: 5000 })

  console.log(period);
  
const getColumnsByPeriod = columns4.slice(parseInt(period)-1, 23)
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <KTCardBody className='py-4 '>
        <div className='table-responsive'>
         
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
            
            <div style={{marginRight: "20px"}}>
                <label className="form-label">Period</label>
                    <select 
                        onChange={(e:any)=>setPeriod(e.target.value)}
                        className="form-select form-select-solid" aria-label="Select example">
                        {
                            periods.map((item:any)=>(
                                <option value={item.id}>{item.title}</option>
                            ))
                        }
                    </select>
            </div>
            <div style={{marginRight: "20px"}}>
                <label className="form-label">Range</label>
                    <select 
                        onChange={(e:any)=>setPeriodInterval(e.target.value)}
                        className="form-select form-select-solid" aria-label="Select example">
                        {
                            PeriodInterval.map((item:any)=>(
                                <option value={item.id}>{item.title}</option>
                            ))
                        }
                    </select>
            </div>
            <div style={{marginRight: "20px"}}>
                <label className="form-label">Project</label>
                    <select 
                        onChange={(e:any)=>setProject(e.target.value)}
                        className="form-select form-select-solid" aria-label="Select example">
                        {
                            Projects?.data.map((item:any)=>(
                                <option value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
            </div>
            <div >
                <label className="form-label">Financce Option</label>
                    <select 
                        onChange={(e:any)=>setFinanceOption(e.target.value)}
                        className="form-select form-select-solid" aria-label="Select example">
                        {
                            FinanceOptions?.data.map((item:any)=>(
                                <option value={item.id}>{item.description}</option>
                            ))
                        }
                    </select>
            </div>
            </div>
            {/* <img width={200} src={toAbsoluteUrl('/media/omnilogo.png')} alt="" /> */}
          </div>
          <br></br>
          <br></br>

          <h1>Inflows</h1>
          
          <Table columns={
            
            // periodInterval==='1'?columns1
            // : periodInterval==='2'?columns2 
            // : periodInterval==='3'?columns3
            // : periodInterval==='4'?columns4:
            getColumnsByPeriod
          } />
          <br></br>
          <br></br>
          <h1>Outflows</h1>
         
          <Table />
         
        </div>
      </KTCardBody>
    </div>
  )
}

export { CashFlow }

