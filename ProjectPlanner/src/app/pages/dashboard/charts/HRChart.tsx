/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../../_metronic/assets/ts/_utils'
import {useThemeMode} from '../../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'
// import {useThemeMode} from '../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
}

const HRChart: React.FC<Props> = ({className, chartColor, chartHeight}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
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

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode])

  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0 d-flex justify-content-between flex-column overflow-hidden'>
        <div ref={chartRef} className='mixed-widget-10-chart'></div>
      </div>
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string): ApexOptions => {
  const labelColor = getCSSVariableValue('--kt-gray-500')
  const borderColor = getCSSVariableValue('--kt-gray-200')
  const secondaryColor = getCSSVariableValue('--kt-gray-300')
  const baseColor = getCSSVariableValue('--kt-' + "#125B50")

  return {
    series: 
      // {
      //   name: 'MALE',
      //   data: [345, 109, 130, 78, 289, 262,836,222,789,333,256,756],
      // },
      
         [324, 234, 51, 101, 201, 190 ,508,248,156,678,321,123],
      
    
    chart: {
      fontFamily: 'inherit',
      type: 'pie',
      height: 450,
      // stacked: true,
      // toolbar: {
      //   // show: false,
      // },
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: '50%',
    //     borderRadius: 5,
    //   },
    // },
    legend: {
        position: 'top',
        offsetY: 20,
        show:false,
        
    },
    // dataLabels: {
    //   enabled: false,
    // },
    // stroke: {
    //   show: true,
    //   width: 2,
    //   colors: ['transparent'],
    // },
    // xaxis: {
    //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    //   axisBorder: {
    //     show: false,
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    //   labels: {
    //     style: {
    //       colors: labelColor,
    //       fontSize: '12px',
    //     },
    //   },
    //   title: {
    //     text: ''
    //   },
    // },
    // yaxis: {
    //   labels: {
    //     style: {
    //       colors: labelColor,
    //       fontSize: '12px',
    //     },
    //   },
    // },
    
    // fill: {
    //   type: 'solid',
    // },
    // states: {
    //   normal: {
    //     filter: {
    //       type: 'none',
    //       value: 0,
    //     },
    //   },
    //   hover: {
    //     filter: {
    //       type: 'none',
    //       value: 0,
    //     },
    //   },
    //   active: {
    //     allowMultipleDataPointsSelection: false,
    //     filter: {
    //       type: 'none',
    //       value: 0,
    //     },
    //   },
    // },
    
    // tooltip: {
    //   style: {
    //     fontSize: '12px',
    //   },
    //   y: {
    //     formatter: function (val) {
    //       return val + ''
    //     },
    //   },
    // },
    colors: ["#445C3C", "#FDA77F","#C9D99E"],
    // grid: {
    //   padding: {
    //     top: 10,
    //   },
    //   borderColor: borderColor,
    //   strokeDashArray: 4,
    //   yaxis: {
    //     lines: {
    //       show: true,
    //     },
    //   },
    // },
  }
}

export {HRChart}
