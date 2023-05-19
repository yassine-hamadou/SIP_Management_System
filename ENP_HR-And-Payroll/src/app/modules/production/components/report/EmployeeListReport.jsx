import {  useEffect, useRef } from 'react';
import { DxReportViewer} from 'devexpress-reporting/dx-webdocumentviewer';
import ko from "knockout";
import "devexpress-reporting/dx-webdocumentviewer";
import "../../../../../../node_modules/devextreme/dist/css/dx.light.css";
import "../../../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css";
import "../../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css";
import "../../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css";



const ReportViewer = () => {
    const reportUrl = ko.observable(`EmployeeListReport`);
    const viewerRef = useRef();
    const requestOptions = {
      host: "http://208.117.44.15/serverside/",
      invokeAction: "DXXRDV"
    };

   
    useEffect(() => {
      const viewer = new DxReportViewer(viewerRef.current, 
        { reportUrl, 
          requestOptions,
          callbacks: {
            

            // customizeParameterEditors: function(s, e) {
              
            //   if(s.name === 'Gender'){
            //     e.displayName="Custom Gender"
            //     s.value='FEMALE'
            //     console.log("this item is gender")
            //   }
              
            //   if(s.name === 'Paygroup'){
            //     e.displayName="Custom Paygroup"
                
            //     console.log("Paygroup")
            //   }

            //   if(s.name ==='tenantid'){
                
            //     e.displayName="Custom Tenant"
               
                
            //     console.log('tenantParmVal',)
            //   }
              
            // },

          
            customizeParameterLookUpSource: function(s, e) { 
              const tenantId = localStorage.getItem('tenant')
              if(s.name==='tenantid'){
                 var parametersModel = e.filter(x=>x.value===tenantId); 
                 console.log(parametersModel);
                 
                return parametersModel
              }
            },
          }
        });
      viewer.render(); 
      return () => viewer.dispose();
    })
    return (<div ref={viewerRef}></div>);
  }


function EmployeeListReport() {
        return (<div style={{ width: "100%", height: "800px" }}>
    <ReportViewer />
    {/* <Viewer report={{ Uri: 'MemberListReport.rdlx-json' }} /> */}
    
</div>);
}
export default EmployeeListReport;