import '../../../../../node_modules/devextreme/dist/css/dx.light.css'
import '../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css'
import '../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css'
import '../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-querybuilder.css'
import '../../../../../node_modules/devexpress-dashboard/dist/css/dx-dashboard.light.css'

import { DashboardControl } from 'devexpress-dashboard-react';
  
const HRNewDashBoard = () => {
    return (
        <div style={{width: '100%', height: '80vh'}}>
            <DashboardControl
                id='web-dashboard'
                style={{height: '100%'}}
                // endpoint='https://demos.devexpress.com/services/dashboard/api'
                // endpoint='https ://enp.sipconsult.net/dashboards/dashboardcontrol'
                endpoint='https://enp.sipconsult.net/dashboards/dashboardcontrol'
                workingMode='ViewerOnly'
                dashboardId='HRDashBoard'
            ></DashboardControl>
        </div>  
    )
}

const EmpSummaryDashBoard = () => {
    return (
        <div style={{width: '100%', height: '80vh'}}>
            <DashboardControl
                id='web-dashboard'
                style={{height: '100%'}}
                // endpoint='https://demos.devexpress.com/services/dashboard/api'
                // endpoint='https ://208.117.44.15/dashboards/dashboardcontrol'
                endpoint='https://enp.sipconsult.net/dashboards/dashboardcontrol'
                workingMode='ViewerOnly'
                dashboardId='employee_summary'
            ></DashboardControl>
        </div>  
    )
}
  export {HRNewDashBoard, EmpSummaryDashBoard};