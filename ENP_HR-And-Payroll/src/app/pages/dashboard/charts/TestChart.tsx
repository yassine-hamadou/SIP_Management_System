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

const TestChart: React.FC<Props> = ({className, chartColor, chartHeight}) => {
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
    series: [
      {
        name: 'Departments',
        data: [40, 60, 50, 20, 50, 70, 30, 60],
      },
      {
        name: 'No. of Staff',
        data: [20, 50, 70, 40, 60, 30, 70, 20],
      },
      {
        name: 'Leave Planning',
        data: [40, 20, 40, 70, 30, 50, 60, 90],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: 450,
      
      
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        
      },
    },
    legend: {
        position: 'bottom',
        // offsetY: 0
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
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],

    },
    yaxis: {
        title: {
          text: 'Per Month'
        }
      },
    // yaxis: {
    //   labels: {
    //     style: {
    //       colors: labelColor,
    //       fontSize: '12px',
    //     },
    //   },
    // },
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
          return  val + ' %'
        },
      },
    },
    colors: ["#125B50", "#F8B400","#FF6363"],
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

export {TestChart}
