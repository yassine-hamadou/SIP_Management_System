/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../../_metronic/assets/ts/_utils'
import {useThemeMode} from '../../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'
import { useQuery } from 'react-query'
import { fetchChartData } from '../../../services/ApiCalls'


type Props = {
  className: string
  chartColor: string
  chartHeight: string
}

const HRChart: React.FC<Props> = ({className, chartColor, chartHeight}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const { data: chartData } = useQuery('chartdata', ()=> fetchChartData(tenantId), { cacheTime: 5000 })


  const tenantId = localStorage.getItem('tenant')
  const departmentName = chartData?.data.map((item:any)=>{
    return item.departmentName
  })

  departmentName?.push("Total")

  
  const male = chartData?.data.map((item:any)=>{
    return item.totalMale
  })
  
  const sum = male?.reduce((total:any, num:any) => total + parseInt(num.trim()), 0);
  // const sum = chartData.reduce((total, num:any ) => {
  //   const newNum = parseInt(num.trim())
  //   if (newNum !== null && !isNaN(newNum)) {
  //     return total + newNum;
  //   }
  //   return total;
  // }, 0);

  male?.push(sum)
  
  const femal = chartData?.data.map((item:any)=>{
    return item.totalFemale
  })

  // const sum1 = femal?.reduce((total:any, num:any) => total + parseInt(num), 0);
  const sum1 = femal?.reduce((total:any, num:any ) => {
    if (num !== null && !isNaN(num)) {
      return total + num;
    }
    return total;
  }, 0);
  
  femal?.push(sum1)

  const chartOptions = (chartColor: string, chartHeight: string): ApexOptions => {
    const labelColor = getCSSVariableValue('--kt-gray-500')
    const borderColor = getCSSVariableValue('--kt-gray-200')
    const secondaryColor = getCSSVariableValue('--kt-gray-300')
    const baseColor = getCSSVariableValue('--kt-' + "#125B50")
  
    
  
    
    return {
      series: [
        {
          name: 'MALE',
          // data: [53, 24, 130, 78, 289, 262,836],
          data: male,
        },
        {
          name: 'FEMALE',
          data: femal,
          // data: [45, 21, 51, 101, 201, 190 ,508],
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: 450,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
        },
      },
      legend: {
          position: 'top',
          offsetY: 20
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: departmentName,
        
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
        title: {
          text: 'Employee By Department'
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
      },
      
      fill: {
        type: 'solid',
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      
      tooltip: {
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function (val) {
            return val + ''
          },
        },
      },
      colors: ["#445C3C", "#FDA77F","#C9D99E"],
      grid: {
        padding: {
          top: 10,
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    }
  }
  
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()
    // loadData()
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode, male, femal])

  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
        <div ref={chartRef} className='mixed-widget-10-chart'></div>
      </div>
    </div>
  )
}

export {HRChart}
