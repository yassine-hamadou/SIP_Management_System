import React, { useEffect, useRef, useState } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { getCSSVariableValue } from '../../../_metronic/assets/ts/_utils'
import { useQuery } from "react-query";
import axios from "axios";
import { ENP_URL, fetchDocument } from '../../modules/production/urls';
import { useThemeMode } from '../../../_metronic/partials/layout/theme-mode/ThemeModeProvider';
import { CycleDetailsDummyData } from '../../data/DummyData';


type Props = {
  className: string
  chartColor: string
  chartHeight: string
}


const BarChart: React.FC<Props> = ({ className, chartColor, chartHeight }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const { mode } = useThemeMode()
  const tenantId = localStorage.getItem('tenant')
  const data: any = []
  const categories: any = []
  const { data: cycleDetails } = useQuery('cycledetails', () => fetchDocument(`cycleDetails/tenant/${tenantId}`), { cacheTime: 5000 })
console.log('cycleDetails: ', cycleDetails?.data)


  const chartOptions = (chartColor: string, chartHeight: string): ApexOptions => {
    const labelColor = getCSSVariableValue('--kt-gray-500')
    const borderColor = getCSSVariableValue('--kt-gray-200')
    const secondaryColor = getCSSVariableValue('--kt-gray-300')
    const baseColor = getCSSVariableValue('--kt-' + chartColor)

    return {
      series: [
        {
          name: 'Total volumes',
          data: data?.slice(-12)
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: chartHeight,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
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
        categories: categories,
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
            return `${val}`
          },
        },
      },
      colors: [baseColor, secondaryColor],
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

    // return a chart for cycle details per volumes per hauler



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

// group by hauler unit
  const groupedByHauler: any = {};
  CycleDetailsDummyData.forEach((item) => {
    if (!groupedByHauler[item.haulerUnit]) {
      groupedByHauler[item.haulerUnit] = [];
    }
    groupedByHauler[item.haulerUnit].push(item);
  });

// sum volumes per hauler
  const newData = [];
  for (const hauler in groupedByHauler) {
    const volumes = groupedByHauler[hauler].map((item: { volume: any; }) => item.volume);
    const sum = volumes.reduce((accumulator: any, currentValue: any) => accumulator + currentValue);
    newData.push({ hauler, sum });
  }

  newData.map((item: any) => {
    categories.push(item.hauler)
    data.push(item.sum)
  })


  console.log('groupedByHauler: ', groupedByHauler)
  console.log('categories: ', categories)
  console.log('data: ', data)
  console.log('newData: ', newData)
  console.log('dummyData: ', CycleDetailsDummyData)

  useEffect(() => {

    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode, categories, data])


  return (
    <div className={`card border border-gray-400 ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0 pb-6 d-flex justify-content-between flex-column overflow-hidden'>
        {/* begin::Hidden */}
        <div className='d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3'>
          <div className='me-2'>
            <span className='fw-bold text-gray-800 d-block fs-3'>Hauler volumes</span>
          </div>

          <div className={`fw-bold fs-3 text-${chartColor}`}>{
          }</div>
        </div>
        {/* end::Hidden */}

        {/* begin::Chart */}
        <div ref={chartRef} className='mixed-widget-10-chart'></div>
        {/* end::Chart */}
      </div>
    </div>
  )
}


export { BarChart }
