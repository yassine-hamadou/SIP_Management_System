import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import {registerLicense} from '@syncfusion/ej2-base';
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

// Registering Syncfusion license key
registerLicense(
    'Mgo+DSMBaFt/QHRqVVhkWFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSHxad01nWXpaeXRcTg==;Mgo+DSMBPh8sVXJ0S0J+XE9AclRDX' +
    '3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0dqWHdacHFRT2JeVA==;ORg4AjUWIQA/Gnt2VVhkQlFacltJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1Z' +
    'hSXxQdkRhUH5WdHRQQmlfVkE=;MTAyNTk4NUAzMjMwMmUzNDJlMzBTZGVrZjFhdTBrMW4xdUhMbGk1NmFuQi85YWgzQ01waW1aY1AzOS9NNFZBPQ==;' +
    'MTAyNTk4NkAzMjMwMmUzNDJlMzBWaVRpL0plK3lJLzNBS0Q0ZzNmSVMxb0IwZHlBNlFFWjJmY2NJUzcvSDNjPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaF' +
    'tGVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViW3ZfeHBVQ2VcUUF2;MTAyNTk4OEAzMjMwMmUzNDJlMzBmajBrNEl4SnE5MXoxc0psdXJGNDBm' +
    'eWk3ekwyZFcwZ2Y0blVNYnJSVW1jPQ==;MTAyNTk4OUAzMjMwMmUzNDJlMzBJMTNjRjJCWXF5NkdsakhtV0JiUDJSSzA5YTNDOWE5Z1ZKODJLUzI5Qk' +
    'RBPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacltJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRhUH5WdHRQQ2BbWUQ=;MTAyNTk5MUAzMjMwMmUzNDJ' +
    'lMzBSbFp3OWVUdWZ0Njd2U2RHMklLQWxzWGw3Z0YvV2dBTTFqR0dGVktHb0FBPQ==;MTAyNTk5MkAzMjMwMmUzNDJlMzBvMWtzZEJzeXBvQ3NBQ3A1T' +
    'zFTV0hpNWhWMm1mZTdTYmdPR2NjWmNDR0tvPQ==;MTAyNTk5M0AzMjMwMmUzNDJlMzBmajBrNEl4SnE5MXoxc0psdXJGNDBmeWk3ekwyZFcwZ2Y0blV' +
    'NYnJSVW1jPQ=='
);

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
    createRoot(container).render(
        <QueryClientProvider client={queryClient}>
            <MetronicI18nProvider>
                <AuthProvider>
                    <AppRoutes/>
                </AuthProvider>
            </MetronicI18nProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}
